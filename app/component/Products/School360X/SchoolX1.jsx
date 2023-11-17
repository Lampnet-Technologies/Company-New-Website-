import React from "react";
import Producthero from "../../../../public/images/School360Hero.svg";
import Product1 from "../ProductProps/Product1";

const SchoolX1 = () => {
  const initial = "Request a Quote";
  const initial2 = "Become a Reseller";
  const header = "School 360";
  const subheader =
    "A Frontier Solution for  Borderless Learning and School Management ";
  const paragraph =
    "Build reputable school brand, raise productivity and manage operations more efficiently with your one-stop school software.";
  return (
    <div>
      <Product1
        header={header}
        subheader={subheader}
        paragraph={paragraph}
        image={Producthero}
        initial={initial}
        initial2={initial2}
      />
    </div>
  );
};

export default SchoolX1;
