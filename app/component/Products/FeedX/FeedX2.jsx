import React from "react";
import Product2 from "../ProductProps/Product2";
import Features1 from "../../../../public/images/Features4.svg";
import Features2 from "../../../../public/images/Features5.svg";
import Features3 from "../../../../public/images/Features6.svg";

const FeedX2 = () => {
  const header = "Word-Class Features";
  const subHeader =
    "FoodX Has All The Flexibility You Need To Stay Ahead of The Competition";
  const paragraph =
    "We understand your idea is unique, and so should be your product, hence we combine our resouces to accelerate the growth of your startup from ideation to execution";

  const color = "#F6613F";
  return (
    <div>
      <Product2
        color={color}
        header={header}
        subHeader={subHeader}
        paragraph={paragraph}
        data={data}
        textColor={color}
      />
    </div>
  );
};

export default FeedX2;

const data = [
  {
    id: 1,
    body: "Customize the advert listings by promoting sponsored adverts on your apps . Simply set the time frame and select the item to be featured.",
    name: "SOS Button",
    image: Features1,
  },
  {
    id: 2,
    body: " Ratings and reviews system in which all your customers can be the judge for product/ service quality for quality service and reviews",
    name: "Surge Pricing",
    image: Features2,
  },
  {
    id: 3,
    body: "Calculate real-time estimated time of arrival (ETA) with our last mile delivery system along with real-time re-routing and delivery route optimization.",
    name: "Push Notifications",
    image: Features3,
  },
  {
    id: 4,
    body: "Our system can also work in the areas having low data penetration. Hence, there isn’t much dependency on high internet speed or data consumption.",
    name: "Chris Alex",
    image: Features1,
  },
];
