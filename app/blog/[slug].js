// pages/blog/[slug].js

import { groq } from 'next-sanity';
import client from '@/sanity/sanity.client';
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
// ... (include other necessary server-safe imports like PortableText renderer)

const urlFor = (source) => urlBuilder(client).image(source);

// **A. getStaticPaths: Tells Next.js what pages to build**
export async function getStaticPaths() {
  // 1. Fetch all 'slugs' for the 'post' document type from Sanity
  const query = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
  const slugs = await client.fetch(query);

  // 2. Map the slugs into the required { params: { slug: '...' } } format
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    // Must be 'false' for static export (next export)
    // Any request to an unlisted slug will result in a 404 page.
    fallback: false, 
  };
}

// **B. getStaticProps: Fetches the content for each slug**
export async function getStaticProps({ params }) {
  const { slug } = params;

  // Query Sanity for the specific post using the slug
  const postQuery = groq`*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
}

// **C. The Single Post Component (Server Component)**
export default function SingleBlogPost({ post }) {
  // Since this is SSG, the `post` data is always available at runtime.

  return (
    <article className="container">
      <p>Category: {post.categories}</p>
      <h1>{post.title}</h1>
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          width={800}
          height={400}
          // IMPORTANT for static export: Next.js Image Optimization needs a server. 
          // Set unoptimized={true} or configure a custom image loader.
          unoptimized={true} 
        />
      )}
      {/* Render your detailed post content here */}
      {/* Assuming you use a Portable Text component to render the body */}
      {/* <PortableText blocks={post.body} /> */}
    </article>
  );
}
