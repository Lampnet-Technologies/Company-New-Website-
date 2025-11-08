import React from "react";
import Product1 from "../ProductProps/Product1";
import Producthero from "../../../../public/images/CoWorkSpaceHero.svg";
import Form from "../../Form/page";

const NCXPOSX1 = () => {
  const initial = "Consult Our Expert";
  const initial2 = "Become a Reseller";
  const header = "NCX Point of Sale";
  const subheader = "Multi Branch POS – ERP, Inventory, Stock & SaaS Business Management Software";
  const paragraph =
    "Best ERP, Stock Management, Point of Sale & Invoicing Application. Everything you need to run every branch. Simple to use. Powerful to manage.";
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

export default NCXPOSX1;
