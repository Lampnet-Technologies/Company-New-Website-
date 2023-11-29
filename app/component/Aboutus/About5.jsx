import React from "react";
import classes from "./About5.module.css";
import Image from "next/image";
import About5image from "../../../public/images/About5image.svg";

const About5 = () => {
  return (
    <div className={`container ${classes.About5Main}`}>
      <div className={classes.About5Parent}>
        <div className={classes.About5ImageB}>
          <Image src={About5image} alt="" quality={100} width={500} />
        </div>
        <div className={classes.About5Child}>
          <h6>About us</h6>
          <h2>
            We are a one-stop technology solution provider for startups and
            businesses{" "}
          </h2>
          <p>
            LampNet Solutions is a remote-based agile IT Consulting & Mobile
            Technology Development company in West Africa, who are service
            providers of world-class solutions and mobile technologies for high
            business growth and transformation with vast experience in Mobile
            Application Development, Enterprise solutions, Security and Cloud
            based technologies.{" "}
          </p>
        </div>

        <div className={classes.About5ImageA}>
          <Image
            src={About5image}
            alt=""
            quality={100}
            width={500}
            // placeholder="blur"
            // blurDataURL=""
          />
        </div>
      </div>
    </div>
  );
};

export default About5;
