import React from "react";
import classes from "./HomePage2.module.css";
import Image from "next/image";
import Partner1 from "../../../public/images/Partner1.svg";
import Partner2 from "../../../public/images/Partner2.svg";
import Partner3 from "../../../public/images/Partner3.svg";
import Partner4 from "../../../public/images/Partner4.svg";
import Partner5 from "../../../public/images/Partner5.svg";
import Partner6 from "../../../public/images/Partner6.svg";
import Partner7 from "../../../public/images/Partner7.svg";

const HomePage2 = () => {
  return (
    <div className="container">
      <div className={classes.HomePage2Parent}>
        <Image src={Partner1} alt="" quality={100} width={100} />
        <Image src={Partner2} alt="" quality={100} width={100} />
        <Image src={Partner3} alt="" quality={100} width={100} />
        <Image src={Partner4} alt="" quality={100} width={100} />
        <Image src={Partner5} alt="" quality={100} width={100} />
        <Image src={Partner6} alt="" quality={100} width={100} />
        <Image src={Partner7} alt="" quality={100} width={100} />
      </div>
    </div>
  );
};

export default HomePage2;
