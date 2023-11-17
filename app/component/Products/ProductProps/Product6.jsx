import React from "react";
import classes from "./Product6.module.css";
import Image from "next/image";

const Product6 = ({data}) => {
  return (
    <div className= {classes.Product6Main}>
      {data.map((d) => (
        <div key={d.id} className= {classes.Product6Parent}>
          <Image src={d.img} alt={d.head} quality={100} width={20} />
          <h6> {d.head} </h6>
        </div>
      ))}
    </div>
  );
};

export default Product6;


