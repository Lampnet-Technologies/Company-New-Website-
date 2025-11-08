// pages/blog/BlogComponent.js
"use client";

import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import Link from "next/link";
import client from "@/sanity/sanity.client";
import classes from "./Blog.module.css";
import ArrowRight from "../../public/images/arrow-right.svg";
// Note: We are no longer using useQuery to *fetch* the data, 
// but you might still use it for other purposes.
// import { useQuery } from "@tanstack/react-query"; 
import { useState } from "react";
// ... other imports

const urlFor = (source) => urlBuilder(client).image(source);

// The component now accepts the pre-fetched data
export default function BlogComponent({ initialData }) {
  // Use the pre-fetched data directly.
  const data = initialData; 

  // Since you are using a static export, you should remove the
  // isPending, isError, and error states/logic related to the initial fetch,
  // as the data is available immediately.
  
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  
  // ... (rest of your existing filtering and pagination logic remains here) ...

  const allData = filteredData.length > 0 ? filteredData : data || [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    // ... (Your JSX structure for the list page) ...
    <div className={`container ${classes.BlogTheMain}`}>
        {/* ... Categories and filter buttons ... */}

        <div className={classes.BlogParent}>
            {currentItems.map((blog, index) => (
                <Link
                    // Make sure the href matches the new location of the single post page
                    href={`/blog/${blog.slug}`} 
                    key={index}
                    className={classes.BlogChild}
                >
                    {/* ... Post preview rendering ... */}
                </Link>
            ))}
        </div>
        {/* ... Pagination component ... */}
    </div>
  );
}
