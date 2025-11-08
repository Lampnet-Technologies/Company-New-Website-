import React from "react";
import classes from "./HomePage2.module.css";
import Image from "next/image";
import Partner0 from "../../../public/images/Partner0.png";
import Partner1 from "../../../public/images/Partner1.svg";
import Partner2 from "../../../public/images/Partner2.svg";
import Partner3 from "../../../public/images/Partner3.svg";
import Partner4 from "../../../public/images/Partner4.svg";
import Partner5 from "../../../public/images/Partner5.svg";
import Partner6 from "../../../public/images/Partner6.svg";
import Partner7 from "../../../public/images/Partner7.svg";
import Partner8 from "../../../public/images/Partner8.png";
import Partner9 from "../../../public/images/Partner9.png";

const HomePage2 = () => {
  return (
    <div className="container-fluid">
      <div className={classes.HomePage2Track}>
      <div className={classes.HomePage2Parent}>
        <Image
          src={Partner0}
          alt=""
          quality={100}
          width={100}
          height={40}
          className={classes.HomePage2Image}
        />
        <Image
          src={Partner1}
          alt=""
          quality={100}
          width={100}
          height={40}
          className={classes.HomePage2Image}
        />
        <Image
          src={Partner2}
          alt=""
          quality={100}
          width={100}
          height={40}
          className={classes.HomePage2Image}
        />
        <Image
          src={Partner3}
          alt=""
          quality={100}
          width={100}
          height={40}
          className={classes.HomePage2Image}
        />
        <Image
          src={Partner4}
          alt=""
          quality={100}
          width={100}
          height={40}
          className={classes.HomePage2Image}
        />
        <Image
          src={Partner5}
          alt=""
          quality={100}
          width={100}
          height={40}
          className={classes.HomePage2Image}
        />
        <Image
          src={Partner6}
          alt=""
          quality={100}
          width={100}
          height={40}
          className={classes.HomePage2Image}
        />
        <Image
          src={Partner7}
          alt=""
          quality={100}
          width={100}
          height={40}
          className={classes.HomePage2Image}
        />
        <Image
          src={Partner8}
          alt=""
          quality={100}
          width={100}
          height={40}
          className={classes.HomePage2Image}
        />
        <Image
          src={Partner9}
          alt=""
          quality={100}
          width={100}
          height={40}
          className={classes.HomePage2Image}
        />
      </div>
      </div>
    </div>
  );
};

export default HomePage2;
