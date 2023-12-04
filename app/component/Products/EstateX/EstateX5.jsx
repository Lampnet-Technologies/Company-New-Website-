import React from "react";
import Product5 from "../ProductProps/Product5";

const EstateX5 = () => {
  const header = "All businesses can use EstateX";
  const subheader = "The right fit for any asset class";
  const body =
    "Different asset classes require different solutions. EstateX is built to support the unique workflows need for each kind of property you manage.";
  const color = "#AB0E12";
  return (
    <div>
      <Product5
        header={header}
        subheader={subheader}
        body={body}
        textColor={color}
      />
    </div>
  );
};

export default EstateX5;
