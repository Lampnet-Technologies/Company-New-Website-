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
          </div>
        ))}
      </div>
      {isSmallScreen && (
        <div className={classes.HomePage5Button}>
          {displayedItems < filteredProducts.length && (
            <button onClick={handleShowMoreClick}> see all </button>
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
];

const products = [
  {
    id: 1,
    name: "CourierX Logistics App",
    category: 2, // Belongs to "Food" category
  },
  {
    id: 2,
    name: "OrderX Food Ordering App",
    category: 3, // Belongs to "Transportation" category
  },
  {
    id: 3,
    name: "UberX Ride Hailing App",
    category: 2, // Belongs to "Food" category
  },
  {
    id: 4,
    name: "OrderX Grocery Delivery App",
    category: 2, // Belongs to "Food" category
  },
  {
    id: 5,
    name: "OrderX Gas Delivery App",
    category: 2, // Belongs to "Food" category
  },
  {
    id: 6,
    name: "OrderX Laundry Delivery App",
    category: 2, // Belongs to "Food" category
  },
  {
    id: 7,
    name: "OrderX Online Store & Delivery App",
    category: 2, // Belongs to "Food" category
  },
  {
    id: 8,
    name: "OrderX Healthcare & Fitness Consultation App",
    category: 2, // Belongs to "Food" category
  },
  {
    id: 9,
    name: "HotelX Management & POS Solution App",
    category: 2, // Belongs to "Food" category
  },
  {
    id: 10,
    name: "UberX Ride Hailing App",
    category: 2, // Belongs to "Food" category
  },
  {
    id: 11,
    name: "UberX Taxi Hailing App",
    category: 2, // Belongs to "Food" category
  },
  {
    id: 12,
    name: "HotelX Management & POS Solution App",
    category: 2, // Belongs to "Food" category
  },
  // ... (other products)
];
