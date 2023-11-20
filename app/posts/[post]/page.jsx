"use client";
import { getPost } from "@/sanity/sanity.query";

export default async function Post({ params }) {
  const slug = params.post;
  const post = await getPost(slug);

  return <div>{post?.title}</div>;
}
