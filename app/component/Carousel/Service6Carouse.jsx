"use client";
import React from "react";
import classes from "./Service6Carouse.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const Service6Carouse = ({ data }) => {
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
      items: 1,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      className={classes.Service6Carousel}
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
        <div
          key={index}
          className={`container ${classes.Service6CarouselChild}`}
        >
          <Image src={d.image} alt={d.title} quality={100} width={40} />
          <h6>{d.name} </h6>
          <p> {d.body} </p>
        </div>
      ))}
    </Carousel>
  );
};

export default Service6Carouse;
