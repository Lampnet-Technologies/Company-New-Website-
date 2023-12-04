import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/Realtime2.svg";
import Circle from "../../../../public/images/Circle.svg";

const FeedX4 = () => {
  const header = "About FoodX";
  const subheader = "Leverage new possibilities with FoodX";
  const body =
    "LampNets Solutions strives to provide top-tier IT solutions to businesses of all sizes and locations from industry experts";
  const title =
    "User-friendly interfaces for a streamlined online food delivery business";
  const tag1 = "Live MapReal-time Tracking";
  const taga =
    "Your customers can get an idea of the estimated time of arrival for your parcel with real map";
  const tag2 = "Multiple Payment Option";
  const tagb =
    "Your customers easily make payments with multiple authenticated payment gateways for quick payments";
  const tag3 = "Re-order";
  const tagc =
    "Your customers have convenience to order the same item or multiple with a single tap.";

  const initial = "Download Now";
  const color = "#F6613F";
  const backgroundColor = "#F6613F";
  const border = "0px solid #F6613F";
  const background = "#111827";
  const h2Color = "#fff";
  const pColor = "#fff";
  return (
    <div>
      <Product4
        header={header}
        subheader={subheader}
        body={body}
        title={title}
        tag1={tag1}
        taga={taga}
        tag2={tag2}
        tagb={tagb}
        tag3={tag3}
        tagc={tagc}
        img={Realtime}
        Circle={Circle}
        initial={initial}
        textColor={color}
        backgroundColor={backgroundColor}
        border={border}
        background={background}
        h2Color={h2Color}
        pColor={pColor}
      />
    </div>
  );
};

export default FeedX4;
