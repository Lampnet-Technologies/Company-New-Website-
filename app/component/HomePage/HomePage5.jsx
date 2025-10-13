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

  const filteredProducts =
    selectedCategory === 1
      ? products
      : products.filter((product) => product.category === selectedCategory);

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
  {
    id: 1,
    name: "CourierX Logistics App",
    category: 3, // Belongs to "Logistics" category
    link: "/courier-x",
  },
  {
    id: 2,
    name: " FoodX App",
    category: 2, // Belongs to "Food" category
    link: "/fleed-x",
  },
  {
    id: 3,
    name: "UberX Ride Hailing App",
    category: 3, // Belongs to "Logistics" category
    link: "/uber-x",
  },
  {
    id: 4,
    name: "EstateX App",
    category: 10, // Belongs to "Real Estate" category
    link: "/estate-x",
  },
  {
    id: 5,
    name: "PayX App",
    category: 6, // Belongs to "Finance" category
    link: "/fintech-x",
  },
  {
    id: 6,
    name: "HotelX App",
    category: 11, // Belongs to "Hospitality" category
    link: "/hotel-x",
  },
  {
    id: 7,
    name: "MedX App",
    category: 5, // Belongs to "Health" category
    link: "/med-x",
  },
  {
    id: 8,
    name: "School 360 LMS",
    category: 4, // Belongs to "Education" category
    link: "/school-x",
  },
  {
    id: 9,
    name: "ThriftX App",
    category: 6, // Belongs to "Finance" category
    link: "/thrift-x",
  },
  {
    id: 10,
    name: "Co-WorkspaceX App",
    category: 7, // Belongs to "Productivity & AI" category
    link: "/co-workspace-x",
  },
  {
    id: 11,
    name: "Restaurant 360",
    category: 2, // Belongs to "Food" category
    link: "/restaurant360-x",
  },
  {
    id: 12,
    name: "OrderX App",
    category: 8, // Belongs to "Retail & E-Commerce" category
    link: "/order-x",
  },
  {
    id: 13,
    name: "VoiceX App",
    category: 7, // Belongs to "Productivity & AI" category
    link: "/voice-x",
  },
  {
    id: 17,
    name: "NCX Point of Sale",
    category: 9, // Belongs to "CRM & ERP" category
    link: "/ncx-point-of-sale",
  },
  {
    id: 18,
    name: "NCX Billing Book",
    category: 9, // Belongs to "CRM & ERP" category
    link: "/ncx-billing-book",
  },
  // Not proper linked to their pages for now belong to "CRM & ERP" category
  {
    id: 14,
    name: "Bitrix24 CRM",
    category: 9, // Belongs to "CRM & ERP" category
    link: "https://www.bitrix24.com/solutions/tool/crm.php",
  },
  {
    id: 15,
    name: "QuickBooks CRM",
    category: 9, // Belongs to "CRM & ERP" category
    link: "https://quickbooks.intuit.com/accounting/",
  },
  {
    id: 16,
    name: "Odoo CRM",
    category: 9, // Belongs to "CRM & ERP" category
    link: "https://www.odoo.com/app/crm",
  },
  {
    id: 19,
    name: "Bitrix24 Telephony",
    category: 9, // Belongs to "CRM & ERP" category
    link: "https://www.bitrix24.com/solutions/tool/telephony.php",
  },
  {
    id: 20,
    name: "Bitrix24 Contact Center",
    category: 9, // Belongs to "CRM & ERP" category
    link: "https://www.bitrix24.com/solutions/tool/contact_center.php",
  },
  {
    id: 21,
    name: "Bitrix24 Project Management",
    category: 7, // Belongs to "Productivity & AI" category
    link: "https://www.bitrix24.com/solutions/tool/tasks_and_projects.php",
  },
  {
    id: 22,
    name: "Bitrix24 Retail",
    category: 8, // Belongs to "Retail & E-Commerce" category
    link: "https://www.bitrix24.com/solutions/industry/retail.php",
  },
  {
    id: 23,
    name: "Bitrix24 Call Center",
    category: 9,
    link: "https://www.bitrix24.com/solutions/industry/call-center-solution.php",
  },
  {
    id: 24,
    name: "Bitrix24 Real Estate",
    category: 10, // Belongs to "Real Estate" category
    link: "https://www.bitrix24.com/solutions/industry/real-estate.php",
  },
  {
    id: 25,
    name: "Odoo Point of Sale",
    category: 9, // Belongs to "CRM & ERP" category
    link: "https://www.odoo.com/app/point-of-sale-shop",
  },
  {
    id: 26,
    name: "Odoo Accounting",
    category: 6, // Belongs to "Finance" category
    link: "https://www.odoo.com/app/accounting",
  },
  {
    id: 27,
    name: "Odoo Inventory",
    category: 8, // Belongs to "Retail & E-Commerce" category
    link: "https://www.odoo.com/app/inventory",
  },
  {
    id: 28,
    name: "Odoo Manufacturing",
    category: 12, // Belongs to "Manufacturing" category
    link: "https://www.odoo.com/app/manufacturing",
  },
  {
    id: 29,
    name: "Odoo HRM",
    category: 9, // Belongs to "CRM & ERP" category
    link: "https://www.odoo.com/app/employees",
  },
  {
    id: 30,
    name: "Odoo Field Service",
    category: 3, // Belongs to "Logistics" category
    link: "https://www.odoo.com/app/field-service",
  },
  {
    id: 31,
    name: "Odoo Helpdesk",
    category: 9, // Belongs to "CRM & ERP" category
    link: "https://www.odoo.com/app/helpdesk",
  },
  {
    id: 32,
    name: "Odoo Fleet",
    category: 3, // Belongs to "Logistics" category
    link: "https://www.odoo.com/app/fleet",
  },
  // ... (other products)
];
