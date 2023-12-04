import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/UberRealTime.svg";
import Circle from "../../../../public/images/Circle.svg";

const UberX4 = () => {
  const title = "Customer Application";
  const tag1 = "Real-time Tracking";
  const taga =
    "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.";
  const tag2 = "Easy booking";
  const tagb =
    "Stay connected and collaborate better with co-learners.so you’ll never need to enter data twice.";
  const tag3 = "Multiple Payment Option";
  const tagc = "Save time with efficient patient & study management features.";
  const header = "About UberX";
  const subheader = "Steller Features For You, Cab drivers and Users";
  const body =
    "Our on-demand Uber Clone App – For Ride-hailing Offers Unique Features Against Your Competitors";
  const initial = "Download Now";
  const color = "#0F479C";
  const backgroundColor = "#0F479C";
  const border = "0px solid #0F479C";
  return (
    <div>
      {" "}
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
      />
    </div>
  );
};

export default UberX4;
