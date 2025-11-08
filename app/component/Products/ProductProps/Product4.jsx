"use client";
import React from "react";
import classes from "./Product4.module.css";

import Image from "next/image";
import ButtonTwo from "../../Button/ButtonTwo";
import MyButton from "../../Button/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Product4 = ({
  header,
  data,
  subheader,
  body,
  title,
  tag1,
  taga,
  tag2,
  tagb,
  tag3,
  tagc,
  img,
  Circle,
  initial,
  textColor,
  backgroundColor,
  border,
  background,
  h2Color,
  pColor,
}) => {
  const h6Style = {
    color: textColor,
    fontSize: "21px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "25.2px" /* 120% */,
  };

  const h2Style = {
    color: h2Color,
  };
  const pStyle = {
    color: pColor,
  };

  const backgroundStyle = {
    background: background,
  };

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
    <div style={backgroundStyle} className={`${classes.Product4Main}`}>
      <div className={`container ${classes.Product4Parent}`}>
        <div className={`${classes.Product4Child}`}>
          <h6 style={h6Style}> {header} </h6>
          <h2 style={h2Style}>{subheader} </h2>
          <p style={pStyle}> {body} </p>
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
            <div key={index} className={`${classes.Product4Sister}`}>
              <div className={`${classes.Product4BroMobile}`}>
                <Image
                  src={d.image}
                  alt=""
                  quality={100}
                  width={350}
                  height={400}
                />
              </div>
              <div className={classes.Product4SubSis}>
                <h2 style={h2Style}> {d.title} </h2>
                <div className={classes.Product4SubBro}>
                  <h6 style={pStyle}>
                    <Image src={d.Circle} alt="" width={10} quality={100} />{" "}
                    {d.tag1 ?? tag1}{" "}
                  </h6>
                  <p> {d.taga ?? taga} </p>
                  <h6 style={pStyle}>
                    <Image src={d.Circle} alt="" width={10} quality={100} />{" "}
                    {d.tag2 ?? tag2}{" "}
                  </h6>
                  <p> {d.tagb ?? tagb} </p>
                  <h6 style={pStyle}>
                    <Image src={d.Circle} alt="" width={10} quality={100} />{" "}
                    {d.tag3 ?? tag3}{" "}
                  </h6>
                  <p> {d.tagc ?? tagc} </p>
                </div>

                <div className={classes.Product4ButtonMain}>
                  <MyButton
                    text={initial}
                    backgroundColor={backgroundColor}
                    border={border}
                  />
                </div>
              </div>
              <div className={`${classes.Product4Bro}`}>
                <Image
                  src={d.image}
                  alt=""
                  quality={100}
                  width={350}
                  height={400}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Product4;
