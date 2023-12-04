import React from "react";
import Product5 from "../ProductProps/Product5";

const MedX5 = () => {
  const header = "All businesses can use MedX";
  const subheader = "Supercharge Your Clinic With MedX";
  const body =
    "MedX is built to handle everything that clinics both large and small need to run smoothly. Forget spreadsheets, integrations, paper notes and scanning - do it all from one easy to use tool.";
  const color = "#3E83EA";
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

export default MedX5;
