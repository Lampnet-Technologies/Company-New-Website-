import React from "react";
import Product5 from "../ProductProps/Product5";
const CoWorkspaceX5 = () => {
  const header = "All Spaces Can Use Co-WorkspaceX";
  const subheader = "Welcome to the New Way of Running Flexible Workspaces.";
  const body =
    "From coworking hubs and corporate offices to studios and innovation labs — Co-WorkspaceX empowers every type of space to operate efficiently, manage members seamlessly, and deliver exceptional experiences with ease.";
  const color = "#1628F4";
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

export default CoWorkspaceX5;
