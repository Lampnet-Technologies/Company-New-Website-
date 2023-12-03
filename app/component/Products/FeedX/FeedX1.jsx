import React from "react";
import Product1 from "../ProductProps/Product1";
import Producthero from "../../../../public/images/FleetXhero.svg";

const FeedX1 = () => {
  const initial = "Request a Quote";
  const initial2 = "Become a Reseller";
  const header = "FoodX";
  const subheader =
    "All-in-One & Read-to-Use Food Delivery  App for Kitchens, Restaurants and Cafés";
  const paragraph =
    "FoodX is a market-ready online food delivery app solution to launch your online food delivery business without any hassle.";

  const backgroundColor = "#F6613F";
  const colorbutton = "#F6613F";
  const border = "1px solid #F6613F";
  const color = "#F6613F";

  return (
    <div>
      <Product1
        color={color}
        header={header}
        subheader={subheader}
        paragraph={paragraph}
        image={Producthero}
        initial={initial}
        initial2={initial2}
        backgroundColor={backgroundColor}
        colorbutton={colorbutton}
        border={border}
        textColor={color}
      />
    </div>
  );
};

export default FeedX1;
