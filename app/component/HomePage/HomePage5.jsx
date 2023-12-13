"use client";
import React, { useState, useEffect } from "react";
import classes from "./HomePage5.module.css";
import Industry1 from "../../../public/images/Industry1.svg";
import Industry2 from "../../../public/images/Industry2.svg";
import Industry3 from "../../../public/images/Industry3.svg";
import Industry4 from "../../../public/images/Industry4.svg";
import Industry5 from "../../../public/images/Industry5.svg";
import Industry6 from "../../../public/images/Industry6.svg";
import Industry7 from "../../../public/images/Industry7.svg";
import Industry8 from "../../../public/images/Industry8.svg";
import Image from "next/image";
import arrowOne from "../../../public/images/arrowOne.svg";
import arrowTwo from "../../../public/images/arrowTwo.svg";
import ButtonThree from "../Button/ButtonThree";
import MyButton from "../Button/Button";
import Link from "next/link";

const HomePage5 = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const [seeAll, setSeeAll] = useState("See all solutions");

  const filteredProducts =
    selectedCategory === 1
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const [selectedCard, setSelectedCard] = useState(1);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const [displayedItems, setDisplayedItems] = useState(4);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const itemsPerPage = 4;

  const handleShowMoreClick = () => {
    setDisplayedItems(displayedItems + itemsPerPage);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
      if (window.innerWidth <= 576) {
        setDisplayedItems(4);
      } else {
        setDisplayedItems(filteredProducts.length);
      }
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [filteredProducts.length]);

  return (
    <div className="container">
      <div className={`${classes.HomePage5Main}`}>
        {categories.map((c) => (
          <div
            key={c.id}
            className={`${classes.HomePage5Parent} 
          }`}
            onClick={() => handleCategoryClick(c.id)}
          >
            <Image src={c.image} alt={c.text} quality={100} width={30} />

            <p className={selectedCategory === c.id ? classes.Selected : ""}>
              {" "}
              {c.text}{" "}
            </p>
          </div>
        ))}
      </div>

      <div className={classes.ProductList}>
        {filteredProducts.slice(0, displayedItems).map((product) => (
          <div
            key={product.id}
            className={`${classes.ProductListChild} ${
              selectedCard === product.id ? classes.SelectedTwo : ""
            }`}
            onClick={() => handleCardClick(product.id)}
          >
            {" "}
            <Link href={product.link}>
              <p> {product.name}</p>

              <div className={classes.HomePage5img}>
                {selectedCard === product.id ? (
                  <Image
                    src={arrowOne}
                    alt="Arrow One"
                    quality={100}
                    width={30}
                  />
                ) : (
                  <Image
                    src={arrowTwo}
                    alt="Arrow Two"
                    quality={100}
                    width={30}
                  />
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
      {isSmallScreen && (
        <div className={classes.HomePage5Button}>
          {displayedItems < filteredProducts.length && (
            // <button onClick={handleShowMoreClick}> see all </button>
            <MyButton onClick={handleShowMoreClick} text="See more" />
          )}
        </div>
      )}

      <div className={classes.HomePage5Button}>
        <ButtonThree text={seeAll} />
      </div>
    </div>
  );
};

export default HomePage5;

const categories = [
  {
    id: 1,
    image: Industry1,
    text: "All industries",
  },
  {
    id: 2,
    image: Industry2,
    text: "Food",
  },
  {
    id: 3,
    image: Industry3,
    text: "Transportation",
  },
  {
    id: 4,
    image: Industry4,
    text: "Education",
  },
  {
    id: 5,
    image: Industry5,
    text: "Health & Lifestyle",
  },
  {
    id: 6,
    image: Industry6,
    text: "Banking & Finance",
  },
  {
    id: 7,
    image: Industry7,
    text: "Productivity",
  },
  {
    id: 8,
    image: Industry8,
    text: "E-Commerce",
  },
  // {
  //   id: 9,
  //   image: Industry8,
  //   text: "E-Commerce",
  // },
  // {
  //   id: 10,
  //   image: Industry8,
  //   text: "E-Commerce",
  // },
  // {
  //   id: 11,
  //   image: Industry8,
  //   text: "E-Commerce",
  // },
  // {
  //   id: 12,
  //   image: Industry8,
  //   text: "E-Commerce",
  // },
];

const products = [
  {
    id: 1,
    name: "CourierX Logistics App",
    category: 2, // Belongs to "Food" category
    link: "/courier-x",
  },
  {
    id: 2,
    name: " FoodX Ordering App",
    category: 2, // Belongs to "Transportation" category
    link: "/fleed-x",
  },
  {
    id: 3,
    name: "UberX Ride Hailing App",
    category: 3, // Belongs to "Food" category
    link: "/uber-x",
  },
  {
    id: 4,
    name: "EstateX App",
    category: 2, // Belongs to "Food" category
    link: "/estate-x",
  },
  {
    id: 5,
    name: "FintechX App",
    category: 6, // Belongs to "Food" category
    link: "/fintech-x",
  },
  {
    id: 6,
    name: "HotelX App",
    category: 8, // Belongs to "Food" category
    link: "/hotel-x",
  },
  {
    id: 7,
    name: "MedX App",
    category: 5, // Belongs to "Food" category
    link: "/med-x",
  },
  {
    id: 8,
    name: "School360X App",
    category: 4, // Belongs to "Food" category
    link: "/school-x",
  },
  {
    id: 9,
    name: "ThriftX App",
    category: 3, // Belongs to "Food" category
    link: "/thrift-x",
  },
  {
    id: 10,
    name: "Co-workspaceX App",
    category: 7, // Belongs to "Food" category
    link: "/co-workspace-x",
  },
  {
    id: 11,
    name: "RestaurantX App",
    category: 2, // Belongs to "Food" category
    link: "/uber-x",
  },
  {
    id: 12,
    name: "OrderX App",
    category: 3, // Belongs to "Food" category
    link: "/order-x",
  },
  // ... (other products)
];
