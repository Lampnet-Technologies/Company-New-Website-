import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/SchoolAbout.svg";
import Circle from "../../../../public/images/Circle.svg";

const SchoolX4 = () => {
  const title = "Class Management";
  const tag1 = "Faster Learning Approach";
  const taga =
    "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.";
  const tag2 = "Improved Techy Skills";
  const tagb =
    "Stay connected and collaborate better with co-learners.so you’ll never need to enter data twice.";
  const tag3 = "Increased Productivity";
  const tagc = "Save time with efficient patient & study management features.";
  const header = "About School 360";
  const subheader = "You Can Manage Your School With School 360";
  const body =
    "School 360 helps you efficiently manage all of your processes. Enjoy professional school management for any educational institution, in minutes!";
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

export default SchoolX4;
