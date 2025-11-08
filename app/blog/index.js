// pages/blog/index.js

import { getBlog } from "@/sanity/sanity.query";
// Import all necessary modules for the list view
import BlogComponent from './BlogComponent'; // We'll move the component logic here

// --- Server-Side Fetching for SSG (runs at build time) ---
export async function getStaticProps() {
  try {
    const data = await getBlog(); // Fetches ALL blog posts from Sanity

    return {
      props: {
        initialData: data,
      },
    };
  } catch (error) {
    console.error("Failed to fetch blog posts for index:", error);
    return {
      props: {
        initialData: [], // Return empty array on failure
      },
    };
  }
}

// This page component simply passes the statically fetched data to the client component.
export default function BlogIndexPage({ initialData }) {
    // Note: You might need to adjust how your client-side data fetching/query library
    // initializes to use this `initialData` instead of fetching it again.
    // For now, we'll assume the component can handle receiving initial props.
    return <BlogComponent initialData={initialData} />;
}
