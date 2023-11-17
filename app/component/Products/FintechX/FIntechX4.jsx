import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/FintechOnboard.svg";
import Circle from "../../../../public/images/Circle.svg";

const FIntechX4 = () => {
  const title = "Onboard Your Customers In Seconds With a Single API Request.";
  const tag1 = "Automated ID verification";
  const taga =
    "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.";
  const tag2 = "Branded Physical and Virtual Cards";
  const tagb =
    "Stay connected and collaborate better with co-learners.so you’ll never need to enter data twice.";
  const tag3 = "Real-time Authorisations";
  const tagc = "Save time with efficient patient & study management features.";
  const header = "About Fintech 360";
  const subheader = "You Can Manage Any Accounts With Fintech 360";
  const body =
    "Fintech 360 Banking Software incorporates all banking and payment functions in one single platform.";
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

export default FIntechX4;
