"use client";
import { getBlog } from "@/sanity/sanity.query";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import Link from "next/link";
import client from "@/sanity/sanity.client";
import classes from "./Blog.module.css";
const urlFor = (source) => urlBuilder(client).image(source);

export default async function Blog() {
  const blogs = await getBlog();
  console.log(blogs);

  return (
    <div className={`container`}>
      <div>
        <h2>Resources and Insights</h2>
      </div>
      <div className={classes.BlogParent}>
        {blogs?.map((blog, index) => (
          <Link
            href={`/posts/${blog.slug}`}
            key={index}
            className={classes.BlogChild}
          >
            {" "}
            {blog.mainImage && (
              <Image
                src={urlFor(blog.mainImage).url()}
                alt={blog.title}
                width={282}
                height={150}
                quality={100}
                className={classes.BlogImage}
              />
            )}
            <h6> {blog.categories} </h6>
            <h2> {blog.title}</h2>
            <p>
              {blog.description?.length > 120
                ? `${blog.description.substring(0, 120)}...`
                : blog.description}
            </p>
            <div>
              <p>Find out more</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// <Link href={`/posts/${b.slug}`} key={b._id}>
// eb86703e-3178-4b97-b11e-2461c61f2346
