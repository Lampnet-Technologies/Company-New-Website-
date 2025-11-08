import React from "react";
import Service3Props from "../../ServicesPage/ServicesProps/Service3Props";
import Clock from "../../../../public/images/HotelCircle.svg";
import Code from "../../../../public/images/HotelCode.svg";

const HotelX8 = () => {
  const heading = "Fully Customizable To Meet Your Business Needs";
  const mail = "Stay Ahead of the Competition";
  const paragraph1 =
    "HotelX white-label property management software comes as a collection of configurable standalone modules, giving hotels full control over bookings, guest management, and operations.";
  const color = "#34A853";

  return (
    <div>
      <Service3Props
        data={data}
        props={heading}
        mail={mail}
        paragraph1={paragraph1}
        textColor={color}
      />
    </div>
  );
};

export default HotelX8;

const data = [
  {
    id: 1,
    header: "100% Customization",
    body: "Fully configurable features allow you to tailor the platform to your hotel’s unique operations and guest experience requirements.",
    image: Clock,
  },
  {
    id: 2,
    header: "Source Code Ownership",
    body: "Gain complete control over your platform with source code access, enabling seamless integration and future enhancements specific to your property.",
    image: Code,
  },
  {
    id: 3,
    header: "Scalability and Growth",
    body: "Easily scale your hotel operations as your business grows, ensuring sustainable growth and enhanced guest satisfaction.",
    image: Clock,
  },
];
