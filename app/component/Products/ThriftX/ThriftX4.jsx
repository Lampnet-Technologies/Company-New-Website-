import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/ThriftXAsset.svg";
import Circle from "../../../../public/images/Circle.svg";

const ThriftX4 = () => {
  const title = "Data to Power Unparalleled Flexibility";
  const tag1 = "Manage Transactions";
  const taga =
    "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.";
  const tag2 = "Set Up Fees & Commissions,";
  const tagb =
    "Stay connected and collaborate better with co-learners.so you’ll never need to enter data twice.";
  const tag3 = "Real-time Authorisations";
  const tagc = "Save time with efficient patient & study management features.";
  const header = "About ThriftX 360";
  const subheader = "You Can Manage Your Assests With ThriftX";
  const body =
    "Fintech 360 Banking Software incorporates all banking and payment functions in one single platform.";
  const initial = "Download Now";
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
      />
    </div>
  );
};

export default ThriftX4;
