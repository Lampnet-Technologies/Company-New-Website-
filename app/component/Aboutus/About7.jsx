import React from "react";
import classes from "./About7.module.css";
import Approach1 from "../../../public/images/Approach1.svg";
import Approach2 from "../../../public/images/Approach2.svg";
import Approach3 from "../../../public/images/Approach3.svg";
import Approach4 from "../../../public/images/Approach4.svg";
import Approach5 from "../../../public/images/Approach5.svg";
import Approach6 from "../../../public/images/Approach6.svg";
import Image from "next/image";

const About7 = () => {
  return (
    <div className={` ${classes.About7Main}`}>
      <div className={`container ${classes.About7Parent}`}>
        <h6>Our Approach</h6>
        <h2>We believe in effective teamwork</h2>
        <p>
          Our African Technology company strives to provide top-tier IT
          solutions to businesses of all sizes and locations within the
          continent, utilizing African talent
        </p>
      </div>

      <div className={`container ${classes.About7MainChild}`}>
        <div className={classes.About7Child}>
          <div className={classes.About7Sis}>
            <Image src={Approach1} alt="" quality={100} width={30} />
            <h6>Collaboration</h6>
            <p>
              We collaborate with our clients to thoroughly assess their unique
              business needs and goals before embarking on any project.
            </p>
          </div>
          <div className={classes.About7Sis}>
            <Image src={Approach2} alt="" quality={100} width={30} />
            <h6>Ensure Quality</h6>
            <p>
              We have a robust quality assurance process to ensure that our
              solutions meet the highest standards.
            </p>
          </div>
          <div className={classes.About7Sis}>
            <Image src={Approach3} alt="" quality={100} width={30} />
            <h6>Continuously Improve</h6>
            <p>
              We are committed to continuous improvement to ensure that we
              provide cutting-edge solutions that exceed our clients
              expectations.
            </p>
          </div>
        </div>

        <div className={classes.About6Bro}> 
          <Image src={Approach6} alt="" quality={100} />
        </div>

        <div className={classes.About6SubChild}>
          <div className={classes.About7Sis1}>
            <Image src={Approach4} alt="" quality={100} width={30} />
            <h6>Ensure Quality</h6>
            <p>
              We have a robust quality assurance process to ensure that our
              solutions meet the highest standards.
            </p>
          </div>
          <div className={classes.About7Sis1}>
            <Image src={Approach5} alt="" quality={100} width={30} />
            <h6>Continuously Improve</h6>
            <p>
              We are committed to continuous improvement to ensure that we
              provide cutting-edge solutions that exceed our clients
              expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About7;
