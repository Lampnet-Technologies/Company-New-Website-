import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/DigitalThriftA.svg";

const ThriftX11 = () => {
  const header = "Digital Thrift Collection App ";
  const body =
    "ThriftX Digital Collection App is a mobile application designed to streamline and enhance the thrift collection process for financial institutions, cooperatives, and savings groups. It offers a user-friendly interface for members to make contributions, track their savings, and manage their accounts conveniently from their smartphones.";
  const initial = "Schedule Demo";
  const backgroundColor = "#E47E1F";
  const border = "0px solid #E47E1F";
  return (
    <div>
      {" "}
      <Product11
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

export default ThriftX11;
