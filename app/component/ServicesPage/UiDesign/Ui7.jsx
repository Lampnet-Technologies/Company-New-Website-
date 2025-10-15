import React from "react";
import classes from "./Ui7.module.css";
import Image from "next/image";
import Ux1 from "../../../../public/images/Ux1.svg";
import Ux2 from "../../../../public/images/Ux2.svg";
import Ux3 from "../../../../public/images/Ux3.svg";
import Ux4 from "../../../../public/images/Ux4.svg";
import Ux5 from "../../../../public/images/Ux5.svg";
import Ux6 from "../../../../public/images/Ux6.svg";

const Ui7 = () => {
  return (
    <div className={`container ${classes.Ui7Main}`}>
      <div className={classes.Ui7Parent}>
        <h6>The Benefits</h6>
        <h2>Our Most Used Design Tools</h2>
        <p>
          We understand your idea is unique, and so should be your product,
          hence we combine our resources to accelerate the growth of your
          startup from ideation to execution
        </p>
      </div>

      <div className={classes.Ui7Child}>
        {data.map((d) => (
          <div key={d.id} className= {classes.Ui7SubChild}>
            <Image src={d.image} alt={d.header} quality={100} width={60} height={60}/>
            <h6>{d.header} </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ui7;

const data = [
  {
    id: 1,
    image: Ux1,
    header: "Figma",
  },
  {
    id: 2,
    image: Ux2,
    header: "Sketch",
  },
  {
    id: 3,
    image: Ux3,
    header: "Invision",
  },
  {
    id: 4,
    image: Ux4,
    header: "Photoshop",
  },
  {
    id: 5,
    image: Ux5,
    header: "Illustrator",
  },
  {
    id: 6,
    image: Ux6,
    header: "AfterEffects",
  },
];
