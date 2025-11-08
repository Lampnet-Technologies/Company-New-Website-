import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/ThriftCircle.svg";

const ThriftX3 = () => {
  const header = "Many Challenges, One Investment Solution";
  const subheader = "Smart Investment Management Software Tailored to You";
  const paragraph =
    "ThriftX provides a powerful investment management platform designed to simplify portfolio management, optimize returns, and reduce operational complexity. Manage your investments efficiently and make informed decisions with ease.";
  const color = "#E47E1F";

  return (
    <div>
      <Product3
        data={data}
        header={header}
        subheader={subheader}
        paragraph={paragraph}
        textColor={color}
      />
    </div>
  );
};

export default ThriftX3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "Maximize Returns",
    body: "Access real-time market insights and analytics to make smarter investment decisions and optimize your portfolio performance.",
  },
  {
    id: 2,
    image: Features3,
    title: "Seamless Integration",
    body: "Easily connect with multiple financial accounts, trading platforms, and third-party tools to streamline investment management.",
  },
  {
    id: 3,
    image: Features3,
    title: "Enhance Your Brand",
    body: "Showcase your investment strategies and success stories with advanced reporting and visualization tools that impress stakeholders.",
  },
];
