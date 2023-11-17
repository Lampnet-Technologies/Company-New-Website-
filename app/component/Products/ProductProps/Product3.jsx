import React from "react";
import Image from "next/image";
import classes from "./Product3.module.css";

const Product3 = (props) => {
  const { header, subheader, paragraph, data } = props;

  return (
    <div className={` ${classes.Product3GrandMain}`}>
      <div className= {`container ${classes.Product3Main} `}>
        <div className={classes.Product3Parent}>
          <h6> {header} </h6>
          <h2> {subheader} </h2>
          <p> {paragraph} </p>
        </div>

        <div className={classes.Product3MainChild}>
          {data.map((d) => (
            <div key={d.id} className={classes.Product3Child}>
              <Image src={d.image} alt={d.title} quality={100} width={40} />

              <h6>{d.title} </h6>
              <p>{d.body} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product3;
