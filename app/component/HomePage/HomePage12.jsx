"use client";
import React, { useRef } from "react";
import classes from "./HomePage12.module.css";
import ScrollSpy from "react-ui-scrollspy";
import Index from "../../component/Center/Index";

const HomePage12 = () => {
  const parentScrollContainerRef = useRef(null > null);

  const onPress = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      var headerOffset = 20;
      var elementPosition = target.getBoundingClientRect().top;
      var offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-4 col-lg-4">
          <div className="position-relative w-100">
            <div
              className="position-fixed top-0 ps-5 text-white"
              style={{ marginTop: "calc(60vh/2)" }}
            >
              <a onClick={(e) => onPress(e)} href={"#section-1"}>
                <div
                  style={{ textAlign: "center" }}
                  data-to-scrollspy-id="section-1"
                  className="ss-item-demo-2"
                >
                  Section 1
                </div>
              </a>
              <a onClick={(e) => onPress(e)} href={"#section-2"}>
                <div
                  data-to-scrollspy-id="section-2"
                  className="ss-item-demo-2 text-center"
                >
                  Section 2
                </div>
              </a>
              <a onClick={(e) => onPress(e)} href={"#section-3"}>
                <div
                  data-to-scrollspy-id="section-3"
                  className="ss-item-demo-2 text-center"
                >
                  Section 3
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-8 col-sm-8 col-lg-8 flex-column d-flex justify-content-center p-0">
          <div ref={parentScrollContainerRef}>
          <ScrollSpy
                activeClass="ss-active-demo-2"
                offsetBottom={100}
                scrollThrottle={80}
                useBoxMethod
              >
                <Index id="section-1" backgroundColor="orange" height="150vh">
                  <p>Section 1</p>
                </Index>
                <Index id="section-2" backgroundColor="brown" height="150vh">
                  <p>Section 2</p>
                </Index>
                <Index id="section-3" backgroundColor="blue" height="150vh">
                  <p>Section 3</p>
                </Index>
              </ScrollSpy>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage12;
