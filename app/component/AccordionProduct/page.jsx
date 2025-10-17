"use client";

import React, { useState } from "react";
import classes from "./AccordionProduct.module.css";
import Image from "next/image";
import StartupScroll from "../../../public/images/StartupScroll.svg";
import Link from "next/link";
import MyButton from "../Button/Button";

const AccordionProduct = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const isButtonActive = (buttonId) => {
    return activeButton === buttonId;
  };

  return (
    <div
      className={`accordion accordion-flush ${classes.OurStoryChild}`}
      id="accordionFlushExample"
    >
      {/* Delivery & Logistics Solutions */}
      <div className="accordion-item">
        <h2
          className={`accordion-header ${classes.OurStoryHeader}`}
          id="flush-headingOne"
        >
          <button
            className={`accordion-button collapsed ${
              isButtonActive("flush-headingOne") ? "active" : ""
            } ${classes.accord}`}
            type="button"
            onClick={() => handleButtonClick("flush-headingOne")}
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Delivery & Logistics
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <Image src={StartupScroll} alt="" quality={100} width={60} />
            <h6>Streamline Your Delivery Operations</h6>
            <p>
              Complete delivery management solutions for logistics, food delivery,
              and transportation services.
            </p>
            <ul className={classes.productList}>
              <li><Link href="/courier-x">Courier-X: Logistics Management</Link></li>
              <li><Link href="/food-x">Food-X: Restaurant Delivery</Link></li>
              <li><Link href="/uber-x">Uber-X: Ride-Hailing Service</Link></li>
            </ul>
            <Link href="/courier-x">
              <MyButton text="Get Started" />
            </Link>
          </div>
        </div>
      </div>

      {/* Business Management Solutions */}
      <div className="accordion-item">
        <h2
          className={`accordion-header ${classes.OurStoryHeader}`}
          id="flush-headingTwo"
        >
          <button
            className={`accordion-button collapsed ${
              isButtonActive("flush-headingTwo") ? "active" : ""
            } ${classes.accord}`}
            type="button"
            onClick={() => handleButtonClick("flush-headingTwo")}
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Business Management
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <Image src={StartupScroll} alt="" quality={100} width={60} />
            <h6>Comprehensive Business Solutions</h6>
            <p>
              Integrated management systems for hospitality, healthcare, and workspace industries.
            </p>
            <ul className={classes.productList}>
              <li><Link href="/restaurant360-x">Restaurant360: Complete Restaurant Management</Link></li>
              <li><Link href="/hotel-x">Hotel-X: Hospitality Management</Link></li>
              <li><Link href="/co-workspace-x">Workspace-X: Co-working Space Management</Link></li>
              <li><Link href="/med-x">Med-X: Healthcare Management</Link></li>
            </ul>
            <Link href="/co-workspace-x">
              <MyButton text="Explore Solutions" />
            </Link>
          </div>
        </div>
      </div>

      {/* Financial Solutions */}
      <div className="accordion-item">
        <h2
          className={`accordion-header ${classes.OurStoryHeader}`}
          id="flush-headingThree"
        >
          <button
            className={`accordion-button collapsed ${
              isButtonActive("flush-headingThree") ? "active" : ""
            } ${classes.accord}`}
            type="button"
            onClick={() => handleButtonClick("flush-headingThree")}
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Financial Technology
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <Image src={StartupScroll} alt="" quality={100} width={60} />
            <h6>Financial & Payment Solutions</h6>
            <p>
              Digital payment and financial management solutions for modern businesses.
            </p>
            <ul className={classes.productList}>
              <li><Link href="/fintech-x">Pay-X: Payment Processing</Link></li>
              <li><Link href="/thrift-x">Thrift-X: Savings Management</Link></li>
              <li><Link href="/order-x">Order-X: Order Management</Link></li>
            </ul>
            <Link href="/fintech-x">
              <MyButton text="Transform Finance" />
            </Link>
          </div>
        </div>
      </div>

      {/* Enterprise Solutions */}
      <div className="accordion-item">
        <h2
          className={`accordion-header ${classes.OurStoryHeader}`}
          id="flush-headingFour"
        >
          <button
            className={`accordion-button collapsed ${
              isButtonActive("flush-headingFour") ? "active" : ""
            } ${classes.accord}`}
            type="button"
            onClick={() => handleButtonClick("flush-headingFour")}
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Enterprise Solutions
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <Image src={StartupScroll} alt="" quality={100} width={60} />
            <h6>Enterprise-Grade Systems</h6>
            <p>
              Comprehensive solutions for large-scale operations and educational institutions.
            </p>
            <ul className={classes.productList}>
              <li><Link href="/estate-x">Estate-X: Property Management</Link></li>
              <li><Link href="/school-x">School360: Education Management</Link></li>
              <li><Link href="/voice-x">Voice-X: Communication System</Link></li>
            </ul>
            <Link href="/school-x">
              <MyButton text="Enterprise Solutions" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionProduct;
