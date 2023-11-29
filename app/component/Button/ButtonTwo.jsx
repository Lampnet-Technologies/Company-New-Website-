import React from "react";
import classes from "./ButtonTwo.module.css";
import ButtonTwoImage from "../../../public/images/ButtonTwo.svg";
import Image from "next/image";

const ButtonTwo = (props) => {
  return (
    <div className={classes.ButtonTwoMain}>
      <button>{props.text}</button>

      <Image src={ButtonTwoImage} alt="" quality={100} width={20} />
    </div>
  );
};

export default ButtonTwo;
