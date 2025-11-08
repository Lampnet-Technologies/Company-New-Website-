import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/CoWorkEvent.svg";

const NCXBBX12 = () => {
  const header = "NCX Customer Relationship Management Web App";
  const body =
    "LampNets NCX Billing Book CRM app is designed to help you manage your customer relationships more effectively. With its powerful features and user-friendly interface, you can easily track interactions, manage leads, and automate your sales processes.";
  const initial = "Schedule Demo";
  const backgroundColor = "#d50ac8";
  const border = "0px solid #d50ac8";
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

export default NCXBBX12;
