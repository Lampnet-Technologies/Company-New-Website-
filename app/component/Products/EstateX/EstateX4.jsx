import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/AboutEstateX.svg";
import Circle from "../../../../public/images/Circle.svg";

const EstateX4 = () => {
  const title = "Automate rent collection";
  const tag1 = "Bookkeeping For Any Portfolio";
  const taga =
    "Keep your bookkeeping complete and accurate. Track every payment, manage accounts payable and reconcile bank accounts automatically.";
  const tag2 = "Vendor Management";
  const tagb =
    "Vendor bills and expenses can be tracked and paid within EstateX, so you’ll never need to enter data twice.";
  const tag3 = "Increased Productivity";
  const tagc = "Save time with efficient patient & study management features.";
  const header = "About MedX";
  const subheader = "You Can Manage Any Door With EstateX";
  const body =
    "Whether you manage five doors or five thousand, you need a simple, unified platform that powers you to be your best";
  const initial = "Download Now";
  const color = "#AB0E12";
  const backgroundColor = "#222";
  const border = "0px solid #222";
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
      />
    </div>
  );
};

export default EstateX4;
