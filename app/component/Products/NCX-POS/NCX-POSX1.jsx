import React from "react";
import Product1 from "../ProductProps/Product1";
import Producthero from "../../../../public/images/CoWorkSpaceHero.svg";
import Form from "../../Form/page";

const CoWorkspaceX1 = () => {
  const initial = "Consult Our Expert";
  const initial2 = "Become a Reseller";
  const header = "Co-WorkspaceX";
  const subheader = "The most intuitive coworking management solution";
  const paragraph =
    "Co-workspaceX is reimagining coworking software. Say hello to the all-in-one platform for flex space management.";
  const backgroundColor = "#1628F4";
  const border = "1px solid #1628F4";
  const colorbutton = "#1628F4";
  const color = "#1628F4";
  return (
    <div>
      <Product1
        header={header}
        subheader={subheader}
        paragraph={paragraph}
        image={Producthero}
        initial={initial}
        initial2={initial2}
        color={color}
        backgroundColor={backgroundColor}
        colorbutton={colorbutton}
        border={border}
        textColor={color}
      />
    </div>
  );
};

export default CoWorkspaceX1;
