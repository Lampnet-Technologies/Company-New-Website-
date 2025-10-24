import React from "react";
import Product1 from "../ProductProps/Product1";
import Producthero from "../../../../public/images/CoWorkSpaceHero.svg";
import Form from "../../Form/page";

const CoWorkspaceX1 = () => {
  const initial = "Consult Our Expert";
  const initial2 = "Become a Reseller";
  const header = "Co-WorkspaceX";
  const subheader = "The most comprehensive co-working space management solution";
  const paragraph =
    "Co-workspaceX is reimagining coworking space management software. Say hello to the all-in-one platform for flexible space management. From booking to billing, our intuitive solution streamlines operations, enhances member experiences, and boosts revenue. Empower your coworking space with Co-workspaceX and unlock its full potential today.";
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
