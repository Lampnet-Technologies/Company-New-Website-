"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getBlog } from "@/sanity/sanity.query";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import client from "@/sanity/sanity.client";
import classes from "./HomeBlog.module.css";
import ArrowRight from "../../../../public/images/arrow-right.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Loading from "@/app/loading";

const urlFor = (source) => urlBuilder(client).image(source);
const HomeBlog = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlog,
  });

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 922 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 922, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (data) {
    content = (
      <div className={`container ${classes.HomeBlogmain}`}>
        <div className={classes.HomeBlogHeader}>
          <h6>Recent News</h6>
          <h2>Resources and Insights</h2>
          <p>
            Our African Technology company strives to provide top-tier IT
            solutions to businesses of all sizes and locations within the
            continent, utilizing African talent
          </p>
        </div>

        <Carousel
          className={classes.myCustomCarousel}
          swipeable={true}
          draggable={false}
          showDots={false}
          arrows={false}
          infinite={true}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side. infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {data.map((d, index) => (
            <div className={classes.HomeBlogGrandParent} key={index}>
              <div className={classes.HomeBlogImage}>
                {d.mainImage && (
                  <Image
                    src={urlFor(d.mainImage).url()}
                    alt=""
                    width={282}
                    height={230}
                    quality={100}
                    className={classes.HomeBlogImg}
                  />
                )}
              </div>
              <div className={classes.HomeBlogParent}>
                <h6> {d.categories} </h6>
                <h2> {d.title}</h2>
                <p>
                  {d.description?.length > 120
                    ? `${d.description.substring(0, 120)}...`
                    : d.description}
                </p>
                <div className={classes.HomeBlogChild}>
                  <Link href={`/posts/${d.slug}`} className={classes.BlogChild}>
                    <p>
                      Find out more{" "}
                      <Image src={ArrowRight} alt="Arro" quality={100} />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }

  console.log(data);
  return <div>{content}</div>;
};

export default HomeBlog;
