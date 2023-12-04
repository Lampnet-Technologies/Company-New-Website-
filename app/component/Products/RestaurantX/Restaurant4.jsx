import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/RestaurantRealtime.svg";
import Circle from "../../../../public/images/Circle.svg";

const Restaurant4 = () => {
  const title = "Customer Application";
  const tag1 = "Real-time Tracking";
  const taga =
    "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.";
  const tag2 = "Easy booking";
  const tagb =
    "Stay connected and collaborate better with co-learners.so you’ll never need to enter data twice.";
  const tag3 = "Multiple Payment Option";
  const tagc = "Save time with efficient patient & study management features.";
  const header = "About Restaurant 360";
  const subheader = "Steller Features For Your Restaurant and Customers";
  const body =
    "Unleash Your Restaurant's Potential With The Industry’s Only Restaurant Enterprise Management Platform.";
  const initial = "Download Now";
  const color = "#AB0E12";
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
      />
    </div>
  );
};

export default Restaurant4;
