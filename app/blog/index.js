// app/posts/[post]/page.js

import { groq } from 'next-sanity';
import client from '@/sanity/sanity.client';
// ... other imports for the component itself

// 1. **REQUIRED FOR STATIC EXPORT:** Generate all possible paths (slugs)
// This function tells Next.js which pages to build statically.
export async function generateStaticParams() {
  try {
    // Query Sanity for all post slugs
    // We only need the current slug field
    const query = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
    const slugs = await client.fetch(query);

    // Map the slugs into the required { post: string } format
    // Note: The key name 'post' must match the folder name '[post]'
    return slugs.map((slug) => ({
      post: slug,
    }));
  } catch (error) {
    console.error("Failed to fetch post slugs for generateStaticParams:", error);
    // Return an empty array on error to prevent crashing, though this means 
    // no posts will be generated if fetching fails.
    return []; 
  }
}

// 2. Data Fetching for the specific post
// This function runs once for every path defined by generateStaticParams.
// Next.js automatically caches this fetch call.
async function getPostData(slug) {
  const postQuery = groq`*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch(postQuery, { slug });
  
  // If post is not found, Next.js will handle the 404 in the component below.
  return post;
}

// 3. The Page Component (Server Component by default)
export default async function SingleBlogPostPage({ params }) {
  const postData = await getPostData(params.post);

  if (!postData) {
    // Render a 404-like experience or just return null for a static 404 page
    return <div>Post not found.</div>;
  }
  
  return (
    <article className="container">
      <h1>{postData.title}</h1>
      {/* ... Render the rest of your post content using postData ... */}
    </article>
  );
}
