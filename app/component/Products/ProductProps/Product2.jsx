"use client";
import React from "react";
import classes from "./Product2.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const Product2 = ({ data, header, subHeader, paragraph, color }) => {
  const headerStyle = {
    color: color && color.h6 ? color.h6 : "#000",
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 922 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 922, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 2,
    },
  };

  return (
    <div className={`container ${classes.Product2GrandMain}`}>
      <div className={classes.Product2Main}>
        <h6 style={headerStyle}>{header} </h6>
        <h2>{subHeader}</h2>
        <p>{paragraph}</p>
      </div>

      <Carousel
        className={classes.Product2}
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
          <div key={index} className={`container ${classes.Product2Child}`}>
            <Image src={d.image} alt={d.title} quality={100} width={40} />
            <h6>{d.name} </h6>
            <p> {d.body} </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Product2;
