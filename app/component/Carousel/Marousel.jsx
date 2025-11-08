"use client";
import React from "react";
import classes from "./Marousel.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { data } from "./Data";

const Marousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1200, min: 922 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 922, min: 576 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={classes.MarouselMain}>
      <div className={`container ${classes.MarouselParent}`}>
        <h6>Testimonials</h6>
        <h2>We Care About Our Customers Too</h2>
        <p>
          {" "}
          We are proud to share some of the positive feedbacks we have received
          from our satisfied customers who have benefited from our services.
        </p>
      </div>

      <Carousel
        className={classes.myCustomCarousel}
        swipeable={true}
        draggable={false}
        showDots={true}
        arrows={true}
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
          <div key={index} className={`container ${classes.MarouselChild}`}>
            <p> {d.body} </p>
            <div className={classes.MarouselBro}>
              <div>
                <h6>{d.name} </h6>
                <span>{d.title} </span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Marousel;
