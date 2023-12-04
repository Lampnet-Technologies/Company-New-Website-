import React from "react";
import classes from "./Product1.module.css";
import Image from "next/image";
import MyButton from "../../Button/Button";
import ButtonThree from "../../Button/ButtonThree";
import ButtonTwo from "../../Button/ButtonTwo";

const Product1 = ({
  backgroundColor,
  textColor,
  border,
  colorbutton,
  header,
  subheader,
  paragraph,
  initial,
  initial2,
  image,
}) => {
  const h6Style = {
    color: textColor, // Set the color dynamically based on the prop
    fontSize: "21px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "25.2px",
  };
  return (
    <div className={`container ${classes.Product1Main}`}>
      <div className={classes.Product1ChildMobile}>
        <Image src={image} alt="" quality={100} width={500} />
      </div>
      <div className={classes.Product1Parent}>
        <h6 style={h6Style}>{header} </h6>
        <h2>{subheader}</h2>
        <p>{paragraph}</p>

        <div className={classes.ProductButton}>
          <div className={classes.ProductButton1}>
            <MyButton text={initial} backgroundColor={backgroundColor} />
          </div>
          <div className={classes.ProductButton2}>
            <ButtonThree text={initial2} color={colorbutton} border={border} />
          </div>
        </div>
      </div>
      <div className={classes.Product1Child}>
        <Image src={image} alt="" quality={100} width={500} />
      </div>
    </div>
  );
};

export default Product1;
