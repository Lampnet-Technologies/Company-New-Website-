import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/HotelRealTime.svg";
import Circle from "../../../../public/images/Circle.svg";

const HotelX4 = () => {
  const title = "Customer Application";
  const tag1 = "Real-time Tracking";
  const taga =
    "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.";
  const tag2 = "Easy booking";
  const tagb =
    "Stay connected and collaborate better with co-learners.so you’ll never need to enter data twice.";
  const tag3 = "Multiple Payment Option";
  const tagc = "Save time with efficient patient & study management features.";
  const header = "About HotelX";
  const subheader = "The Complete Hotel Tech Solution";
  const body =
    "Improve your hotel and resort guest experience and maximise your profits with a smart cloud-based property management software from any device.";
  const initial = "Download Now";
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
      />
    </div>
  );
};

export default HotelX4;
