"use client";

import React, { useState } from "react";
import classes from "./Accordion.module.css";
import Servicesa1 from "../../../public/images/Servicesa1.svg";
import Servicesa2 from "../../../public/images/Servicesa2.svg";
import Servicesa3 from "../../../public/images/Servicesa3.svg";
import Servicesa4 from "../../../public/images/Servicesa4.svg";
import Servicesa5 from "../../../public/images/Servicesa5.svg";
import Servicesa6 from "../../../public/images/Servicesa6.svg";
import Servicesa7 from "../../../public/images/Servicesa7.svg";
import Servicesa8 from "../../../public/images/Servicesa8.svg";
import Servicesa9 from "../../../public/images/Servicesa9.svg";
import Servicesa10 from "../../../public/images/Servicesa10.svg";
import Servicesa11 from "../../../public/images/Servicesa11.svg";
import Servicesa12 from "../../../public/images/Servicesa12.svg";
import Servicesa13 from "../../../public/images/Servicesa13.svg";
import Servicesa14 from "../../../public/images/Servicesa14.svg";
import Servicesa15 from "../../../public/images/Servicesa15.svg";
import Servicesa16 from "../../../public/images/Servicesa16.svg";
import Servicesa17 from "../../../public/images/Servicesa17.svg";
import Servicesa18 from "../../../public/images/Servicesa18.svg";
import Servicesa19 from "../../../public/images/Servicesa19.svg";
import Servicesa20 from "../../../public/images/Servicesa20.svg";
import Servicesa21 from "../../../public/images/Servicesa21.svg";
import Servicesa22 from "../../../public/images/Servicesa22.svg";
import Servicesa23 from "../../../public/images/Servicesa23.svg";
import Servicesa24 from "../../../public/images/Servicesa24.svg";
import Servicesa25 from "../../../public/images/Servicesa25.svg";
import Servicesa26 from "../../../public/images/Servicesa26.svg";
import Servicesa27 from "../../../public/images/Servicesa27.svg";
import Servicesa28 from "../../../public/images/Servicesa28.svg";
import Servicesa29 from "../../../public/images/Servicesa29.svg";
import Servicesa30 from "../../../public/images/Servicesa30.svg";
import Servicesa31 from "../../../public/images/Servicesa31.svg";
import Servicesa32 from "../../../public/images/Servicesa32.svg";

import Image from "next/image";

const Accordionpage = () => {
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
            Cloud Solution & Manangement
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <h6>Cloud solution & Management</h6>
            <p>
              {" "}
              We provide agile cloud services that help businesses drive
              innovation and growth. Our managed IT strategies and processes
              help manage their cloud infrastructure, and ensure data security
              and regulatory compliance. With our stable and cost-effective IT
              infrastructure, we enable businesses focus on core operations
              while we handle technical details with scalable solutions.
            </p>

            <div className={classes.AccordionChildMain}>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa1} alt="Alt" quality={100} width={30} />
                <p> Cloud Management</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa2} alt="Alt" quality={100} width={30} />
                <p> Managed Security</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa3} alt="Alt" quality={100} width={30} />
                <p> Managed DeveOps</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa4} alt="Alt" quality={100} width={30} />
                <p> Managed Support</p>
              </div>
            </div>
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
            Startup Scale-Up & MVP Development
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <h6> Startup Scale-Up & MVP Development</h6>
            <p>
              Leverage our expertise to increase your chances of securing
              funding by effectively pitching your product with a successful
              MVP. Develop a competitive edge in securing funding with our
              expert MVP app development team. Our fast-to-release approach
              delivers a satisfactory usable MVP in just 3-4 months,
              outperforming idea-only competitors.
            </p>
            <div className={classes.AccordionChildMain}>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa5} alt="Alt" quality={100} width={30} />
                <p> Validation & Prototype</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa6} alt="Alt" quality={100} width={30} />
                <p> Industry Research</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa7} alt="Alt" quality={100} width={30} />
                <p> MVP Development</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa8} alt="Alt" quality={100} width={30} />
                <p> Product Scale-Up</p>
              </div>
            </div>
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
            Software Product Development
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <h6> Software Product Development</h6>
            <p>
              Our team of experienced developers uses the latest technologies
              and agile methodologies to deliver high-quality software products
              that meet your business needs. We understand that every project is
              unique, and we tailor our solutions to ensure we deliver products
              that meet your specific requirements.
            </p>
            <div className={classes.AccordionChildMain}>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa9} alt="Alt" quality={100} width={30} />
                <p> Fintech Development</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa10} alt="Alt" quality={100} width={30} />
                <p> Mobile App Development</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa11} alt="Alt" quality={100} width={30} />
                <p> Enterprise Software Devlopment</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa12} alt="Alt" quality={100} width={30} />
                <p>Web/Cloud App Development</p>
              </div>
            </div>
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
            API Development & Integration
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <h6> API Development & Integration</h6>
            <p>
              {" "}
              Bridge the gaps between your disparate systems, extend your
              business capabilities and ensure stellar performance with LampNet
              Solutions API development and integration services. We help your
              team work efficiently by enabling seamless data sharing across
              systems, streamlined businesses processes and enhanced
              collaboration.
            </p>
            <div className={classes.AccordionChildMain}>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa13} alt="Alt" quality={100} width={30} />
                <p>Custom API Development</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa14} alt="Alt" quality={100} width={30} />
                <p> Third Party API Integration</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa15} alt="Alt" quality={100} width={30} />
                <p> Cloud API Integration & Dev</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa16} alt="Alt" quality={100} width={30} />
                <p> Microservice Architecture </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2
          class={`accordion-header ${classes.OurStoryHeader}`}
          id="flush-headingFive"
        >
          <button
            class={`accordion-button collapsed ${classes.accord}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            White Label App Customizations
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingFive"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <h6> White Label App Customizations</h6>
            <p>
              We provide a seamless integration process, allowing businesses to
              easily incorporate our software into their existing infrastructure
              to match their unique brand and user needs, without the need for
              additional development resources. Our white label solutions also
              come with reliable technical support to ensure a smooth experience
              for our clients and their end-users.
            </p>
            <div className={classes.AccordionChildMain}>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa17} alt="Alt" quality={100} width={30} />
                <p> Customizable User Interface</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa18} alt="Alt" quality={100} width={30} />
                <p> Branded Mobile Apps</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa19} alt="Alt" quality={100} width={30} />
                <p> Third Party API Integrations</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa20} alt="Alt" quality={100} width={30} />
                <p> Technical Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2
          class={`accordion-header ${classes.OurStoryHeader}`}
          id="flush-headingSix"
        >
          <button
            class={`accordion-button collapsed ${classes.accord}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSix"
            aria-expanded="false"
            aria-controls="flush-collapseSix"
          >
            Training & IT Consultation
          </button>
        </h2>
        <div
          id="flush-collapseSix"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingSix"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <h6> Training & IT Consultation</h6>
            <p>
              {" "}
              We provide world-class and professional trainings through our
              industry certified trainers at the LampNet Institute of
              Technology. We also offer expert IT consultation to help
              businesses develop and implement an effective IT strategy. We
              assist in smooth digital transformation and system integration as
              well as advise on improvements to your digital customer
              experience.
            </p>
            <div className={classes.AccordionChildMain}>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa21} alt="Alt" quality={100} width={30} />
                <p> Training & Certifications</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa22} alt="Alt" quality={100} width={30} />
                <p> IT System Evaluation</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa23} alt="Alt" quality={100} width={30} />
                <p>Project Management</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa24} alt="Alt" quality={100} width={30} />
                <p> Data Management & Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2
          class={`accordion-header ${classes.OurStoryHeader}`}
          id="flush-headingSeven"
        >
          <button
            class={`accordion-button collapsed ${classes.accord}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSeven"
            aria-expanded="false"
            aria-controls="flush-collapseSeven"
          >
            UI/UX Design
          </button>
        </h2>
        <div
          id="flush-collapseSeven"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingSeven"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <h6> UI/UX Design</h6>
            <p>
              {" "}
              We are a creative in-house design agency that specializes in
              crafting outstanding customer experiences. Our human-centric
              designs help businesses thrive by forging strong customer
              relationships and increasing customer satisfaction by 2X. Trust us
              to deliver optimal experiences that build strong customer
              relationships and drive business growth.
            </p>
            <div className={classes.AccordionChildMain}>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa25} alt="Alt" quality={100} width={30} />
                <p> Wireframing & Prototyping</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa26} alt="Alt" quality={100} width={30} />
                <p> Website Design</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa27} alt="Alt" quality={100} width={30} />
                <p> Mobile Design</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa28} alt="Alt" quality={100} width={30} />
                <p> Branding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2
          class={`accordion-header ${classes.OurStoryHeader}`}
          id="flush-headingEight"
        >
          <button
            class={`accordion-button collapsed ${classes.accord}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseEight"
            aria-expanded="false"
            aria-controls="flush-collapseEight"
          >
            Outsourcing & Team Augmentation
          </button>
        </h2>
        <div
          id="flush-collapseEight"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingEight"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <h6> Outsourcing & Team Augmentation</h6>
            <p>
              {" "}
              We offer experienced top-notch talent with all the necessary
              skills to join your in-house team and work on your projects under
              your direct management. By filling skill and resource gaps in your
              team, we accelerate project progress and help you meet your goals
              faster. Trust us to provide the right talent and skills to drive
              your success.
            </p>
            <div className={classes.AccordionChildMain}>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa29} alt="Alt" quality={100} width={30} />
                <p> IT Staff Outsourcing</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa30} alt="Alt" quality={100} width={30} />
                <p>Team Augumentation</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa31} alt="Alt" quality={100} width={30} />
                <p> Project-Based Outsourcing</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa32} alt="Alt" quality={100} width={30} />
                <p> Remote Staffing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2
          class={`accordion-header ${classes.OurStoryHeader}`}
          id="flush-headingNine"
        >
          <button
            class={`accordion-button collapsed ${classes.accord}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseNine"
            aria-expanded="false"
            aria-controls="flush-collapseNine"
          >
            Artificial Intelligence Development
          </button>
        </h2>
        <div
          id="flush-collapseNine"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingNine"
          data-bs-parent="#accordionFlushExample"
        >
          <div className={`accordion-body ${classes.body}`}>
            <h6> Artificial Intelligence Development</h6>
            <p>
              {" "}
              We automate workflows, build custom AI apps, deploy conversational assistants, and enable AI agents to complete multi‑step tasks. We help organizations automate workflows, deploy conversational assistants, and ship custom AI applications that turn complex multi‑step tasks into measurable outcomes. We focus on measurable business results across industries — accuracy, cycle time, and operational efficiency.
            </p>
            <div className={classes.AccordionChildMain}>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa18} alt="Alt" quality={100} width={30} />
                <p> Agentic Task</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa23} alt="Alt" quality={100} width={30} />
                <p>Document Intelligence</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa31} alt="Alt" quality={100} width={30} />
                <p> Chatbot</p>
              </div>
              <div className={classes.AccordionChild}>
                <Image src={Servicesa13} alt="Alt" quality={100} width={30} />
                <p> Process Automation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordionpage;
