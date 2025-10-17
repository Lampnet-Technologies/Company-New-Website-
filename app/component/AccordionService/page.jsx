"use client";

import React, { useState } from "react";
import classes from "./AccordionService.module.css";
import Image from "next/image";
import StartupScroll from "../../../public/images/StartupScroll.svg";
import Scroll from "../../../public/images/Scroll.svg";
import MyButton from "../Button/Button";
import Link from "next/link";

const services = [
  {
    id: "one",
    title: "Product Discovery & Strategy",
    subtitle: "Research, validation & roadmap",
    description:
      "User research, product-market fit, feature prioritization and a validated roadmap so your product solves real customer problems.",
    links: [{ href: "/services", text: "Learn about our approach" }],
  },
  {
    id: "two",
    title: "MVP Development & Testing",
    subtitle: "Build fast, iterate faster",
    description:
      "Rapid MVP development, continuous testing and user feedback loops to validate assumptions and prepare for market launch.",
    links: [
      { href: "/softwaresolutions", text: "See our engineering services" },
    ],
  },
  {
    id: "three",
    title: "Product Launch & GTM",
    subtitle: "Go-to-market planning & execution",
    description:
      "Launch planning, positioning, analytics and growth experiments to ensure your first users convert into engaged customers.",
    links: [{ href: "/services", text: "Go to launch services" }],
  },
  {
    id: "four",
    title: "Scale & Growth Engineering",
    subtitle: "Performance, reliability & scale",
    description:
      "Architecture improvements, cloud migration, performance tuning and platform scaling to support growth securely and reliably.",
    links: [{ href: "/cloudsolutions", text: "Cloud & infra solutions" }],
  },
  {
    id: "five",
    title: "AI, Data & Automation",
    subtitle: "Intelligence that adds value",
    description:
      "AI/ML integration, automation and data pipelines to turn product usage into actionable intelligence and efficiencies.",
    links: [{ href: "/ai", text: "Explore AI services" }],
  },
  {
    id: "six",
    title: "UX / UI & Design Systems",
    subtitle: "Design that converts",
    description:
      "User-centred design, prototyping and design systems that deliver delightful, accessible and consistent experiences.",
    links: [{ href: "/ui-ux-design", text: "View design services" }],
  },
  {
    id: "seven",
    title: "APIs & Integrations",
    subtitle: "Connect systems reliably",
    description:
      "API design, integrations with 3rd-party platforms (CRM, payment, telephony) and custom connectors to streamline operations.",
    links: [{ href: "/api", text: "Integration services" }],
  },
  {
    id: "eight",
    title: "Training, Support & Managed Services",
    subtitle: "Hand-holding & continuous improvement",
    description:
      "Onboarding, technical support, maintenance and managed services to keep your product healthy and your team confident.",
    links: [
      { href: "/training", text: "Training & support" },
      { href: "/support", text: "Contact support" },
    ],
  },
  {
    id: "nine",
    title: "Staffing & White‑Label Solutions",
    subtitle: "Extend your team or brand",
    description:
      "Outsourced teams, staff augmentation and white-label product customizations to accelerate delivery without hiring overhead.",
    links: [
      { href: "/staffing-solutions", text: "Staffing" },
      { href: "/white-label", text: "White-label" },
    ],
  },
];

const AccordionService = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton((prev) => (prev === buttonId ? null : buttonId));
  };

  const isButtonActive = (buttonId) => activeButton === buttonId;

  return (
    <div
      className={`accordion accordion-flush ${classes.AccordionServiceOurStoryChild}`}
      id="accordionFlushExample"
    >
      {services.map((s, idx) => (
        <div className="accordion-item" key={s.id}>
          <h2
            className={`accordion-header ${classes.AccordionServiceOurStoryHeader}`}
            id={`flush-heading-${s.id}`}
          >
            <button
              className={`accordion-button collapsed ${
                isButtonActive(s.id) ? "active" : ""
              } ${classes.AccordionServiceaccord}`}
              type="button"
              onClick={() => handleButtonClick(s.id)}
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse-${s.id}`}
              aria-expanded={isButtonActive(s.id) ? "true" : "false"}
              aria-controls={`flush-collapse-${s.id}`}
            >
              <div className={classes.HeaderLeft}>
                <Image src={StartupScroll} alt="" quality={100} width={36} />
              </div>
              <div className={classes.HeaderText}>
                <div className={classes.HeaderTitle}>{s.title}</div>
                <div className={classes.HeaderSubtitle}>{s.subtitle}</div>
              </div>
            </button>
          </h2>

          <div
            id={`flush-collapse-${s.id}`}
            className="accordion-collapse collapse"
            aria-labelledby={`flush-heading-${s.id}`}
            data-bs-parent="#accordionFlushExample"
          >
            <div className={`accordion-body ${classes.AccordionServicebody}`}>
              <div className={classes.BodyTop}>
                <Image src={Scroll} alt="" quality={100} width={56} />
                <div>
                  <h6>{s.title}</h6>
                  <p>{s.description}</p>
                </div>
              </div>

              <ul className={classes.productList}>
                {s.links.map((l, i) => (
                  <li key={i}>
                    <Link href={l.href} className={classes.ServiceLink}>
                      {l.text}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className={classes.ServiceCTAs}>
                <Link href="/contact">
                  <MyButton text="Get in touch" />
                </Link>
                <Link href="/contact" className="ms-2">
                  <MyButton text="Request a consultation" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionService;
