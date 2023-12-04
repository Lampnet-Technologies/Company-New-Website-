import React from "react";
import classes from "./Product4.module.css";

import Image from "next/image";
import ButtonTwo from "../../Button/ButtonTwo";
import MyButton from "../../Button/Button";

const Product4 = ({
  header,
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

  return (
    <div style={backgroundStyle} className={`${classes.Product4Main}`}>
      <div className={`container ${classes.Product4Parent}`}>
        <div className={`${classes.Product4Child}`}>
          <h6 style={h6Style}> {header} </h6>
          <h2 style={h2Style}>{subheader} </h2>
          <p style={pStyle}> {body} </p>
        </div>

        <div className={`${classes.Product4Sister}`}>
          <div className={`${classes.Product4BroMobile}`}>
            <Image src={img} alt="" quality={100} width={350} height={400} />
          </div>
          <div className={classes.Product4SubSis}>
            <h2 style={h2Style}> {title} </h2>
            <div className={classes.Product4SubBro}>
              <h6 style={pStyle}>
                <Image src={Circle} alt="" width={10} quality={100} /> {tag1}{" "}
              </h6>
              <p> {taga} </p>
              <h6 style={pStyle}>
                <Image src={Circle} alt="" width={10} quality={100} /> {tag2}{" "}
              </h6>
              <p> {tagb} </p>
              <h6 style={pStyle}>
                <Image src={Circle} alt="" width={10} quality={100} /> {tag3}{" "}
              </h6>
              <p> {tagc} </p>
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
            <Image src={img} alt="" quality={100} width={350} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product4;
