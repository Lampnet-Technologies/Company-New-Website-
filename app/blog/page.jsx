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
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlog,
  });

  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filterByCategory = (category) => {
    const results = data
      ? data.filter((record) => record.categories === category)
      : [];
    setFilteredData(results);
    setCurrentPage(1); // Reset to the first page when applying filters
  };

  const resetFilters = () => {
    setFilteredData([]);
    setCurrentPage(1);
  };

  if (isPending) {
    return <div>Page Loading</div>; // You can customize the loading indicato
  }

  if (isError) {
    content = (
      <Error
        title="An error occured while fetching data"
        message="Failed to fetch data"
      />
    );
  }

  const allData = filteredData.length > 0 ? filteredData : data || [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={`container`}>
      <div className={classes.BlogResources}>
        <h2>Resources and Insights</h2>
      </div>

      <div className={classes.BlogGrand}>
        <div className={classes.BlogGrandChild}>
          <h6 onClick={resetFilters}>All topics</h6>
        </div>
        <div className={classes.BlogGrandChild}>
          <h6 onClick={() => filterByCategory("Product")}>Product</h6>
        </div>
        <div className={classes.BlogGrandChild}>
          <h6 onClick={() => filterByCategory("Software Engineering")}>
            Software Engineering
          </h6>
        </div>
        <div className={classes.BlogGrandChild}>
          <h6 onClick={() => filterByCategory("UI/UX Design")}>UI/UX Design</h6>
        </div>
        <div className={classes.BlogGrandChild}>
          <h6 onClick={() => filterByCategory("Data Management")}>
            Data Management
          </h6>
        </div>
        <div className={classes.BlogGrandChild}>
          <h6 onClick={() => filterByCategory("Information Security")}>
            Information Security
          </h6>
        </div>
        <div className={classes.BlogGrandChild}>
          <h6 onClick={() => filterByCategory("Business Intelligence")}>
            Business Intelligence
          </h6>
        </div>
      </div>

      <div className={classes.BlogParent}>
        {currentItems.length > 0
          ? currentItems.map((blog, index) => (
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
      <div className={classes.Pagination}>
        {allData.length > itemsPerPage && (
          <div className={classes.PaginationMain}>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Back
            </button>
            {Array.from({
              length: Math.ceil(allData.length / itemsPerPage),
            }).map((page, index) => (
              <button key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(allData.length / itemsPerPage)
              }
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
