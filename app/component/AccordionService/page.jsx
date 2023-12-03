"use client";

import React, { useState } from "react";
import classes from "./AccordionService.module.css";
import Image from "next/image";
import StartupScroll from "../../../public/images/StartupScroll.svg";
import Scroll from "../../../public/images/Scroll.svg";
import MyButton from "../Button/Button";

const AccordionService = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const isButtonActive = (buttonId) => {
    return activeButton === buttonId;
  };
  return (
    <div
      class={`accordion accordion-flush  ${classes.AccordionServiceOurStoryChild}`}
      id="accordionFlushExample"
    >
      <div class="accordion-item">
        <h2
          class={`accordion-header ${classes.AccordionServiceOurStoryHeader}`}
          id="flush-headingOne"
        >
          <button
            // class={`accordion-button collapsed ${classes.accord}`}
            className={`accordion-button collapsed ${
              isButtonActive("flush-headingOne") ? "active" : ""
            } ${classes.AccordionServiceaccord}`}
            type="button"
            onClick={() => handleButtonClick("flush-headingOne")}
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Product Discovery
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.AccordionServicebody}`}>
            <p>
              {" "}
              During the product discovery phase, we work closely with your
              business to understand your target market, identify key user needs
              and pain points, and develop a strategy for creating a product
              that meets those needs.
            </p>
            <p>
              We work closely with your team to ensure that your product launch
              is aligned with your business goals and that you have the
              resources and support needed to succeed.
            </p>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2
          class={`accordion-header ${classes.AccordionServiceOurStoryHeader}`}
          id="flush-headingTwo"
        >
          <button
            class={`accordion-button collapsed ${classes.AccordionServiceaccord}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            MVP Development & Testing
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.AccordionServicebody}`}>
            <p>
              Once we have a clear understanding of your product vision, we move
              onto the MVP development and testing phase. We work closely with
              your business to develop a minimum viable product (MVP) that
              includes the core features and functionalities needed to test your
              product in the market.
            </p>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2
          class={`accordion-header ${classes.AccordionServiceOurStoryHeader}`}
          id="flush-headingThree"
        >
          <button
            class={`accordion-button collapsed ${classes.AccordionServiceaccord}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Product Launch
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.AccordionServicebody}`}>
            <p>
              With a validated MVP in hand, we move onto the product launch
              phase. We help your business plan and execute a successful launch
              that includes go-to-market strategy, branding, and messaging.
            </p>
            <p>
              We work closely with your team to ensure that your product launch
              is aligned with your business goals and that you have the
              resources and support needed to succeed{" "}
            </p>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2
          class={`accordion-header ${classes.AccordionServiceOurStoryHeader}`}
          id="flush-headingFour"
        >
          <button
            class={`accordion-button collapsed ${classes.AccordionServiceaccord}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Product Scale-up
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.AccordionServicebody}`}>
            <p>
              {" "}
              Once your product is launched, we work with your business to scale
              it up. We help you identify growth opportunities, optimize your
              marketing efforts, and improve user engagement.
            </p>
            <p>
              We work closely with your team to ensure that your product launch
              is aligned with your business goals and that you have the
              resources and support needed to succeed.
            </p>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2
          class={`accordion-header ${classes.AccordionServiceOurStoryHeader}`}
          id="flush-headingFive"
        >
          <button
            class={`accordion-button collapsed ${classes.AccordionServiceaccord}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            Technical Support
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingFive"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.AccordionServicebody}`}>
            <p>
              {" "}
              Finally, we offer ongoing technical support to ensure that your
              product runs smoothly and that any technical issues are addressed
              quickly. We provide regular maintenance and updates to ensure that
              your product stays up-to-date with the latest technologies and
              that it continues to meet the evolving needs of your business and
              your customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionService;
