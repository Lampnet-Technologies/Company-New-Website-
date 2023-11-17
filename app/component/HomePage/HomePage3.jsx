"use client"
import React, {useState} from "react";
import classes from "./HomePage3.module.css";
import Homepage3image from "../../../public/images/Homepage3.svg";
import Image from "next/image";
import ButtonTwo from "../Button/ButtonTwo";

const HomePage3 = () => {

const [learn, setLearn] = useState("Learn More")

  return (
    <div className= {`container ${classes.HomePage3Main}`}>
      <div className= {classes.HomePage3Parent}>
        <div>
          <Image src={Homepage3image} alt="" quality={100} width={500} />
        </div>

        <div className= {classes.HomePage3Child}>
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

          <ButtonTwo text={learn}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage3;
