import React from "react";
import Product5 from "../ProductProps/Product5";

const SchoolX5 = () => {
  const header = "All Schools can use School 360";
  const subheader = "Works for any type of school";
  const body =
    "Different schools/classes require different solutions. School 360 is built to support the unique output need for each kind of school you own.";
  const color = "#AB0E12";
  return (
    <div>
      {" "}
      <Product5
        header={header}
        subheader={subheader}
        body={body}
        textColor={color}
      />
    </div>
  );
};

export default SchoolX5;
