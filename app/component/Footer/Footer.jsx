import React from "react";
import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/Logo.svg";
import Social1 from "../../../public/images/Social1.svg";
import Social2 from "../../../public/images/Social2.svg";
import Social3 from "../../../public/images/Social3.svg";

const Footer = () => {
  return (
    <div className={`container-fluid ${classes.footerMainParent}`}>
      <div className={`container`}>
        <div className={classes.footerMain}>
          <div className={classes.footerParent}>
            <Link href="/">
              <Image src={Logo} alt="AAC " width={150} height={78} />
            </Link>

            <p>
              We offer a suite of secure & compliant solutions that meets and
              exceeds requirements for small to medium-sized businesses, also
              offering transparent solutions.{" "}
            </p>

            <div className={classes.footerIcons}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className={classes.footericons2}>
                  <Image src={Social1} width={40} height={78} alt="" />
                </div>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className={classes.footericons2}>
                  <Image src={Social2} alt="" width={40} height={78} />
                </div>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className={classes.footericons2}>
                  {" "}
                  <Image src={Social3} alt="" width={40} height={78} />
                </div>
              </a>
            </div>
          </div>

          <div className={classes.footerChildren}>
            <div className={classes.footerChild}>
                <h3>Company</h3>
              <Link href="/about">
                <p>About Us</p>
              </Link>
              <Link href="/services">
                <p>Our Services</p>
              </Link>
              <Link href="/blog">
                <p>Blog</p>
              </Link>
              <Link href="/">
                <p>Partnership</p>
              </Link>
            </div>
            <div className={classes.footerChild}>
              <h3>Support</h3>
              <Link href="/support">
                <p>Support</p>
              </Link>
              <Link href="/terms">
              <p>Terms of services</p>
              </Link>
              <Link href="/privacy">
              <p>Privacy Policy</p>
              </Link>
              <Link href="/">
              <p>Career</p>
              </Link>
            </div>
            <div className={classes.footerChild}>
              
                <h3>Contact</h3>
                <p>128 Itire Rd, Lawanson Surulere Lagos, Nigeria</p>
                <Link href="/">
                <p>+234 816 663 7303</p>
                </Link>
                <Link href="/">
                <p>support@lampnets.com</p>
              </Link>
            </div>
          </div>

          <div className={classes.footerIconsMobile}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className={classes.footericons2}>
                <Image src={Social1} width={40} height={78} alt="" />
              </div>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className={classes.footericons2}>
                <Image src={Social2} width={40} height={78} alt="" />
              </div>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className={classes.footericons2}>
                <Image src={Social3} width={40} height={78} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.footerCopyright}>
        <div className={`container ${classes.footerCopyrightFlex}`}>
          <p>Copyrights by LampNets Solutions</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
