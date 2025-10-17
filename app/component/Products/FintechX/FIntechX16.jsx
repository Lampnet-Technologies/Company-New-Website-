import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/Mockup5.png";

const FIntechX16 = () => {
  const header = "Integrated with thousands of apps";
  const subheader = "Join. Sell. Earn";
  const body =
    "Collaborate and Explore our Partnership Program to earn more by selling, customizing or integrating our premium fintech solution";
  const initial = "Become a Partner";
  const backgroundColor = "#453787";
  const border = "0px solid #453787";
  return (
    <div>
      {" "}
      <Product11
        subheader={subheader}
        header={header}
        body={body}
        initial={initial}
        image={Mockup1}
        backgroundColor={backgroundColor}
        border={border}
      />
    </div>
  );
};

export default FIntechX16;
