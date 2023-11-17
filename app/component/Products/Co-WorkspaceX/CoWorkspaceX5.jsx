import React from "react";
import Product5 from "../ProductProps/Product5";
const CoWorkspaceX5 = () => {
  const header = "All Spaces can Use Co-WorkspaceX";
  const subheader = "Welcome to the new way of running flex spaces.";
  const body =
    "Businesses of all sizes and types, from e-commerce platforms to travel and hospitality companies- use Fintech 360 to process online and offline payments quickly and securely.";
  return (
    <div>
      {" "}
      <Product5 header={header} subheader={subheader} body={body} />
    </div>
  );
};

export default CoWorkspaceX5;
