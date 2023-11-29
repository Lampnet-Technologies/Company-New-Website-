"use client";

import React, { useState } from "react";
import classes from "./AccordionProduct.module.css";
import Image from "next/image";
import StartupScroll from "../../../public/images/StartupScroll.svg";
import Scroll from "../../../public/images/Scroll.svg";
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
      class={`accordion accordion-flush  ${classes.OurStoryChild}`}
      id="accordionFlushExample"
    >
      <div class="accordion-item">
        <h2
          class={`accordion-header ${classes.OurStoryHeader}`}
          id="flush-headingOne"
        >
          <button
            // class={`accordion-button collapsed ${classes.accord}`}
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
            Startup
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <Image src={StartupScroll} alt="" quality={100} width={60} />
            <h6>Focused on Growing Business</h6>
            <p>
              {" "}
              I am serious and committed to the budget, looking to work in this
              online business for at least one year.
            </p>
            <p>My company is already running & receiving real orders</p>
            <MyButton text="Build with us" />
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2
          class={`accordion-header ${classes.OurStoryHeader}`}
          id="flush-headingTwo"
        >
          <button
            class={`accordion-button collapsed ${classes.accord}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            SMB’s
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <Image src={StartupScroll} alt="" quality={100} width={60} />
            <h6> Focused on Growing Business</h6>
            <p>
              I am serious and committed to the budget, looking to work in this
              online business for at least one year.
            </p>
            <p> My company is already running & receiving real orders</p>
            <MyButton text="Build with us" />
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2
          class={`accordion-header ${classes.OurStoryHeader}`}
          id="flush-headingThree"
        >
          <button
            class={`accordion-button collapsed ${classes.accord}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Franchise
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <Image src={StartupScroll} alt="" quality={100} width={60} />
            <h6> Focused on Growing Business</h6>
            <p>
              I am serious and committed to the budget, looking to work in this
              online business for at least one year.
            </p>
            <p>My company is already running & receiving real orders </p>
            <MyButton text="Build with us" />
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2
          class={`accordion-header ${classes.OurStoryHeader}`}
          id="flush-headingFour"
        >
          <button
            class={`accordion-button collapsed ${classes.accord}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Enterprise
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <Image src={StartupScroll} alt="" quality={100} width={60} />
            <h6> Focused on Growing Business</h6>
            <p>
              {" "}
              I am serious and committed to the budget, looking to work in this
              online business for at least one year.
            </p>
            <p>My company is already running & receiving real orders.</p>
            <MyButton text="Build with us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionProduct;
