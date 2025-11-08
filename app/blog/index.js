// app/posts/[post]/page.js
import { groq } from 'next-sanity';
import client from '@/sanity/sanity.client';

// MUST be exported - this is the key part
export async function generateStaticParams() {
  try {
    const query = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
    const slugs = await client.fetch(query);
    
    return slugs.map((slug) => ({
      post: slug,
    }));
  } catch (error) {
    console.error("Failed to fetch post slugs:", error);
    return [];
  }
}

async function getPostData(slug) {
  const postQuery = groq`*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch(postQuery, { slug });
  return post;
}

export default async function SingleBlogPostPage({ params }) {
  const postData = await getPostData(params.post);
  
  if (!postData) {
    return <div>Post not found.</div>;
  }
  
  return (
    <article className="container">
      <h1>{postData.title}</h1>
    </article>
  );
}
