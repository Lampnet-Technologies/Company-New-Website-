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
import Industry9 from "../../../public/images/Industry9.svg";
import Industry10 from "../../../public/images/Services8.svg";
import Image from "next/image";
import arrowOne from "../../../public/images/arrowOne.svg";
import arrowTwo from "../../../public/images/arrowTwo.svg";
import ButtonThree from "../Button/ButtonThree";
import MyButton from "../Button/Button";
import Link from "next/link";

const HomePage5 = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const [seeAll, setSeeAll] = useState("See all solutions");
  const [showAll, setShowAll] = useState(false);

  // Support products having multiple categories (categories array).
  // Backwards-compatible: if a product still uses `category` keep matching it.
  const filteredProducts =
    selectedCategory === 1
      ? products
      : products.filter((product) =>
          product.categories
            ? product.categories.includes(selectedCategory)
            : product.category === selectedCategory
        );

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    // reset showAll when switching categories
    setShowAll(false);
    setSeeAll("See all solutions");
  };

  const [selectedCard, setSelectedCard] = useState(1);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const [displayedItems, setDisplayedItems] = useState(4);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const itemsPerPage = 4;

  const handleShowMoreClick = () => {
    setDisplayedItems((prev) => prev + itemsPerPage);
  };

  useEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth <= 576;
      setIsSmallScreen(small);

      if (showAll) {
        setDisplayedItems(filteredProducts.length);
        return;
      }

      if (small) {
        setDisplayedItems(4);
      } else {
        // default preview on larger screens: first 12 (or less if not available)
        setDisplayedItems(Math.min(12, filteredProducts.length));
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
  }, [filteredProducts.length, showAll]);

  // Decide how many items to show:
  const visibleCount = showAll
    ? filteredProducts.length
    : isSmallScreen
    ? displayedItems
    : Math.min(12, filteredProducts.length);

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
        {filteredProducts.slice(0, visibleCount).map((product) => (
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
          {!showAll && displayedItems < filteredProducts.length && (
            <MyButton onClick={handleShowMoreClick} text="See more" />
          )}
        </div>
      )}

      <div className={classes.HomePage5Button}>
        <ButtonThree
          text={seeAll}
          onClick={() => {
            const next = !showAll;
            setShowAll(next);
            setSeeAll(next ? "Show less" : "See all solutions");
            // when showing all, expand displayedItems so mobile See more/hide logic aligns
            setDisplayedItems(
              next
                ? filteredProducts.length
                : isSmallScreen
                ? 4
                : Math.min(12, filteredProducts.length)
            );
          }}
        />
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
    id: 9,
    image: Industry9,
    text: "CRM & ERP",
  },
  {
    id: 2,
    image: Industry2,
    text: "Food",
  },
  {
    id: 3,
    image: Industry3,
    text: "Logistics",
  },
  {
    id: 4,
    image: Industry4,
    text: "Education",
  },
  {
    id: 5,
    image: Industry5,
    text: "Health",
  },
  {
    id: 6,
    image: Industry6,
    text: "Finance",
  },
  {
    id: 7,
    image: Industry7,
    text: "Productivity & AI",
  },
  {
    id: 8,
    image: Industry8,
    text: "Retail & E-Commerce",
  },
  {
    id: 10,
    image: Industry6,
    text: "Real Estate",
  },
  {
    id: 11,
    image: Industry10,
    text: "Hospitality",
  },
  {
    id: 12,
    image: Industry7,
    text: "Manufacturing",
  },
  // Add more industry filter here later
];

const products = [
  // 🚚 Logistics
  {
    id: 1,
    name: "CourierX - Customizable Logistics/Transportation App",
    categories: [3],
    link: "/courier-x",
  },
  {
    id: 3,
    name: "UberX - Customizable Ride Hailing App",
    categories: [3],
    link: "/uber-x",
  },
  {
    id: 30,
    name: "Odoo Field Service - Comprehensive Field Service Management Solution",
    categories: [3, 9],
    link: "https://www.odoo.com/app/field-service",
  },
  {
    id: 32,
    name: "Odoo Fleet - Comprehensive Fleet Management Solution",
    categories: [3, 9],
    link: "https://www.odoo.com/app/fleet",
  },

  // 🍔 Food
  {
    id: 2,
    name: "FoodX - Customizable Food Delivery App",
    categories: [2],
    link: "/fleed-x",
  },
  {
    id: 11,
    name: "Restaurant360 - Customizable Restaurant Management Solution",
    categories: [2, 9],
    link: "/restaurant360-x",
  },

  // 🏫 Education
  {
    id: 8,
    name: "School360 LMS - Customizable E-Learning Solution",
    categories: [4],
    link: "/school-x",
  },
  {
    id: 33,
    name: "School360 SMS - Customizable School Management Solution",
    categories: [4, 9],
    link: "/school-x",
  },

  // 🏥 Health
  {
    id: 7,
    name: "MedX - Customizable Health/Hospital Management App",
    categories: [5],
    link: "/med-x",
  },
  {
    id: 14,
    name: "Bitrix24 CRM - Comprehensive CRM & ERP Solution",
    categories: [9, 5],
    link: "https://www.bitrix24.com/solutions/tool/crm.php",
  },
  {
    id: 16,
    name: "Odoo CRM - Comprehensive CRM & ERP Solution",
    categories: [9, 5],
    link: "https://www.odoo.com/app/crm",
  },

  // 💳 Finance
  {
    id: 5,
    name: "PayX - Customizable Digital Banking App",
    categories: [6],
    link: "/fintech-x",
  },
  {
    id: 9,
    name: "ThriftX - Customizable Microfinance & Cooperative Solution",
    categories: [6],
    link: "/thrift-x",
  },
  {
    id: 15,
    name: "QuickBooks - Comprehensive Accounting Solution",
    categories: [6, 9],
    link: "https://quickbooks.intuit.com/accounting/",
  },
  {
    id: 26,
    name: "Odoo Accounting - Comprehensive Accounting Solution",
    categories: [6, 9],
    link: "https://www.odoo.com/app/accounting",
  },
  {
    id: 17,
    name: "NCX Point of Sale - Customizable Point of Sale Solution",
    categories: [6, 9, 8],
    link: "/ncx-point-of-sale",
  },

  // ⚙️ Productivity & AI
  {
    id: 10,
    name: "WorkspaceX - Customizable Co-Working Space Management Solution",
    categories: [7],
    link: "/co-workspace-x",
  },
  {
    id: 13,
    name: "VoiceX - Customizable Text-to-Speech AI Solution",
    categories: [7],
    link: "/voice-x",
  },
  {
    id: 21,
    name: "Bitrix24 Project Management - Comprehensive Project Management Solution",
    categories: [7, 9],
    link: "https://www.bitrix24.com/solutions/tool/tasks_and_projects.php",
  },
  {
    id: 31,
    name: "Odoo Helpdesk - Comprehensive Helpdesk Solution",
    categories: [7, 9],
    link: "https://www.odoo.com/app/helpdesk",
  },

  // 🛒 Retail & E-Commerce
  {
    id: 12,
    name: "OrderX - Customizable E-Commerce App",
    categories: [8],
    link: "/order-x",
  },
  {
    id: 22,
    name: "Bitrix24 Retail - Comprehensive Retail Management Solution",
    categories: [8, 9],
    link: "https://www.bitrix24.com/solutions/industry/retail.php",
  },
  {
    id: 27,
    name: "Odoo Inventory - Comprehensive Inventory Management Solution",
    categories: [8, 9],
    link: "https://www.odoo.com/app/inventory",
  },
  {
    id: 25,
    name: "Odoo Point of Sale - Comprehensive Point of Sale Solution",
    categories: [8, 9, 6],
    link: "https://www.odoo.com/app/point-of-sale-shop",
  },
  {
    id: 18,
    name: "NCX POS & Inventory - Customizable Inventory & POS Solution",
    categories: [8, 9, 6],
    link: "/ncx-billing-book",
  },

  // 🏠 Real Estate
  {
    id: 4,
    name: "EstateX - Customizable Property Management Solution",
    categories: [10],
    link: "/estate-x",
  },
  {
    id: 24,
    name: "Bitrix24 Real Estate - Comprehensive Real Estate Solution",
    categories: [10, 9],
    link: "https://www.bitrix24.com/solutions/industry/real-estate.php",
  },

  // 🏨 Hospitality
  {
    id: 6,
    name: "HotelX - Customizable Property Management System App",
    categories: [11],
    link: "/hotel-x",
  },

  // 🏭 Manufacturing
  {
    id: 28,
    name: "Odoo Manufacturing - Comprehensive Manufacturing Solution",
    categories: [12, 9],
    link: "https://www.odoo.com/app/manufacturing",
  },

  // 🧩 CRM & ERP Core Tools
  {
    id: 19,
    name: "Bitrix24 Telephony - Comprehensive Telephony Solution",
    categories: [9],
    link: "https://www.bitrix24.com/solutions/tool/telephony.php",
  },
  {
    id: 20,
    name: "Bitrix24 Contact Center - Comprehensive Contact Center Solution",
    categories: [9],
    link: "https://www.bitrix24.com/solutions/tool/contact_center.php",
  },
  {
    id: 23,
    name: "Bitrix24 Call Center - Comprehensive Call Center Solution",
    categories: [9],
    link: "https://www.bitrix24.com/solutions/industry/call-center-solution.php",
  },
/*   {
    id: 29,
    name: "Odoo HRM - Comprehensive HR Management Solution",
    categories: [9, 7],
    link: "https://www.odoo.com/app/employees",
  }, */
  // Can add more products here
];
