import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/OrderXRealTime.svg";
import Circle from "../../../../public/images/Circle.svg";

const OrderX4 = () => {
  const title = "Clear and complete reporting";
  const tag1 = "Easy booking";
  const taga =
    "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.";
  const tag2 = "Communities";
  const tagb =
    "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.";
  const tag3 = "Real-time Authorisations";
  const tagc = "Save time with efficient patient & study management features.";
  const header = "About OrderX";
  const subheader = "Track anything and everything with ease";
  const body =
    "Fintech 360 Banking Software incorporates all banking and payment functions in one single platform.";
  const initial = "Download Now";
  const color = "#F76C6C";
  const backgroundColor = "#F76C6C";
  const border = "0px solid #F76C6C";

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

export default OrderX4;
