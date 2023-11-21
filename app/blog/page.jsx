"use client";
import { getBlog } from "@/sanity/sanity.query";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import Link from "next/link";
import client from "@/sanity/sanity.client";
import classes from "./Blog.module.css";
import ArrowRight from "../../public/images/arrow-right.svg";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const urlFor = (source) => urlBuilder(client).image(source);

export default function Blog() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlog,
  });
  // console.log(query);

  const [filteredData, setFilteredData] = useState([]);

  const filterByCategory = (category) => {
    const results = data
      ? data.filter((record) => record.categories === category)
      : [];
    setFilteredData(results);
  };

  const resetFilters = () => {
    setFilteredData([]);
  };

  if (isLoading) {
    return <div>Page Loading</div>; // You can customize the loading indicator
  }

  if (isError) {
    return <div>Error loading data</div>; // You can customize the error message
  }

  return (
    <div className={`container`}>
      <div>
        <h2>Resources and Insights</h2>
      </div>

      <div className="BlogGrand">
        <div className="BlogGrandChild">
          <h6 onClick={resetFilters}>All topics</h6>
        </div>
        <div className="BlogGrandChild">
          <h6 onClick={() => filterByCategory("Product")}>Product</h6>
        </div>
        <div className="BlogGrandChild">
          <h6 onClick={() => filterByCategory("Software Engineering")}>
            Software Engineering
          </h6>
        </div>
        <div className="BlogGrandChild">
          <h6 onClick={() => filterByCategory("UI/UX Design")}>UI/UX Design</h6>
        </div>
        <div className="BlogGrandChild">
          <h6 onClick={() => filterByCategory("Data Management")}>
            Data Management
          </h6>
        </div>
        <div className="BlogGrandChild">
          <h6 onClick={() => filterByCategory("Information Security")}>
            Information Security
          </h6>
        </div>
        <div className="BlogGrandChild">
          <h6 onClick={() => filterByCategory("Business Intelligence")}>
            Business Intelligence
          </h6>
        </div>
      </div>

      <div className={classes.BlogParent}>
        {filteredData.length > 0
          ? filteredData.map((blog, index) => (
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
                    height={230}
                    quality={100}
                    className={classes.BlogImage}
                  />
                )}
                <div className={classes.BlogBrother}>
                  <h6> {blog.categories} </h6>
                  <h2> {blog.title}</h2>
                  <p>
                    {blog.description?.length > 120
                      ? `${blog.description.substring(0, 120)}...`
                      : blog.description}
                  </p>
                  <div className={classes.BlogSister}>
                    <p>Find out more</p>
                    <Image src={ArrowRight} alt="Arro" quality={100} />
                  </div>
                </div>
              </Link>
              // ... (render filtered data)
            ))
          : data?.map((blog, index) => (
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
                    height={230}
                    quality={100}
                    className={classes.BlogImage}
                  />
                )}
                <div className={classes.BlogBrother}>
                  <h6> {blog.categories} </h6>
                  <h2> {blog.title}</h2>
                  <p>
                    {blog.description?.length > 120
                      ? `${blog.description.substring(0, 120)}...`
                      : blog.description}
                  </p>
                  <div className={classes.BlogSister}>
                    <p>Find out more</p>
                    <Image src={ArrowRight} alt="Arro" quality={100} />
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}

// export default async function Blog() {
// const blogs = await getBlog();
