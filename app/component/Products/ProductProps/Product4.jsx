import React from "react";
import classes from "./Product4.module.css";

import Image from "next/image";
import ButtonTwo from "../../Button/ButtonTwo";
import MyButton from "../../Button/Button";

const Product4 = (props) => {
  const {
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
  } = props;

  return (
    <div className={`${classes.Product4Main}`}>
      <div className={`container ${classes.Product4Parent}`}>
        <div className={`${classes.Product4Child}`}>
          <h6> {header} </h6>
          <h2>{subheader} </h2>
          <p> {body} </p>
        </div>

        <div className={`${classes.Product4Sister}`}>
          <div className={classes.Product4SubSis}>
            <h2> {title} </h2>
            <div className={classes.Product4SubBro}>
              <h6>
                <Image src={Circle} alt="" width={10} quality={100} /> {tag1}{" "}
              </h6>
              <p> {taga} </p>
              <h6>
                <Image src={Circle} alt="" width={10} quality={100} /> {tag2}{" "}
              </h6>
              <p> {tagb} </p>
              <h6>
                <Image src={Circle} alt="" width={10} quality={100} /> {tag3}{" "}
              </h6>
              <p> {tagc} </p>
            </div>

            <div className= {classes.Product4ButtonMain}>
          <MyButton text={initial} />
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
