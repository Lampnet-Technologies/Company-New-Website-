import React from "react";
import classes from "./About3.module.css";
import Image from "next/image";
import About3a from "../../../public/images/About3a.svg";
import About3b from "../../../public/images/About3b.svg";
import About3c from "../../../public/images/About3c.svg";
import About3d from "../../../public/images/About3d.svg";

const About3 = () => {
  return (
    <div className={classes.About3Main}>
      <div className={`container ${classes.About3Parent}`}>
        <div className={classes.About3Child}>
          <Image src={About3a} alt="" quality={100} width={30} />
          <h2>884+</h2>
          <p>Working hours</p>
        </div>
        <div className={classes.About3Child}>
          <Image src={About3b} alt="" quality={100} width={30} />
          <h2>247+</h2>
          <p>Projects a year</p>
        </div>
        <div className={classes.About3Child}>
          <Image src={About3c} alt="" quality={100} width={30} />
          <h2>170+</h2>
          <p>Happy Clients</p>
        </div>
        <div className={classes.About3Child}>
          <Image src={About3d} alt="" quality={100} width={30} />
          <h2>100+</h2>
          <p>Team members</p>
        </div>
      </div>
    </div>
  );
};

export default About3;
