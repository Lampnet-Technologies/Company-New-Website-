"use client";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
import MyButton from "../Button/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import classes from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [buttonText, setButtonText] = useState("Request a Quote");
  const router = useRouter();

  const pushToQuote = () => {
    router.push("/");
  };

  // fixed-top
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${classes.NavGrandMain}`}
    >
      <div className={`container ${classes.NavbarMain}`}>
        <a className="navbar-brand" href="#">
          <Image
            src={Logo}
            alt=""
            placeholder="blur"
            quality={100}
            width={100}
            onClick={pushToQuote}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${classes.Parent}`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav mx-auto">
            <li className={`nav-item dropdown ${classes.NavItem}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" href="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/about">
                    About us
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`nav-item dropdown ${classes.dropdown}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <div
                className={`dropdown-menu ${classes.dropdownmenu} `}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div>
                  <ul>
                    <li href="/courier-x">
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="/courier-x"
                      >
                        Courier-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="/fleed-x"
                      >
                        Food-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="/med-x"
                      >
                        Med-X
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="/co-workspace-x"
                      >
                        Workspace-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="/restaurant360-x"
                      >
                        Restaurant360
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="/hotel-x"
                      >
                        Hotel-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="/voice-x"
                      >
                        Voice-X
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="/estate-x"
                      >
                        Estate-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="/school-x"
                      >
                        School360
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="/fintech-x"
                      >
                        Pay-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="/thrift-x"
                      >
                        Thrift-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="/order-x"
                      >
                        Order-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="/uber-x"
                      >
                        Uber-X
                      </Link>
                    </li>

                    {/* Add More Products */}
                  </ul>
                </div>
              </div>
            </li>

            <li className={`nav-item dropdown ${classes.NavItem}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Insights
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" href="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/faq">
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`nav-item dropdown ${classes.NavItem}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solutions
              </a>
              <div
                className={`dropdown-menu ${classes.dropdownmenu2} `}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div>
                  <ul>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.bitrix24.com/"
                        target="_blank"
                      >
                        Bitrix24
                      </Link>
                    </li>
                     <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.bitrix24.com/solutions/tool/crm.php"
                        target="_blank"
                      >
                        Bitrix24 CRM
                      </Link>
                    </li>
                     <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.bitrix24.com/solutions/tool/telephony.php"
                        target="_blank"
                      >
                        Bitrix24 Telephony
                      </Link>
                    </li>
                     <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.bitrix24.com/solutions/tool/contact_center.php"
                        target="_blank"
                      >
                        Bitrix24 Contact Center
                      </Link>
                    </li>
                     <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.bitrix24.com/solutions/tool/tasks_and_projects.php"
                        target="_blank"
                      >
                        Bitrix24 Project Management
                      </Link>
                    </li>
                     <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.bitrix24.com/solutions/industry/retail.php"
                        target="_blank"
                      >
                        Bitrix24 Retail
                      </Link>
                    </li>
                     <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.bitrix24.com/solutions/industry/call-center-solution.php"
                        target="_blank"
                      >
                        Bitrix24 Call Center
                      </Link>
                    </li>
                     <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.bitrix24.com/solutions/industry/real-estate.php"
                        target="_blank"
                      >
                        Bitrix24 Real Estate
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.odoo.com/"
                        target="_blank"
                      >
                        Odoo
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.odoo.com/app/crm"
                        target="_blank"
                      >
                        Odoo CRM
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.odoo.com/app/point-of-sale-shop"
                        target="_blank"
                      >
                        Odoo Point of Sale
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.odoo.com/app/accounting"
                        target="_blank"
                      >
                        Odoo Accounting
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.odoo.com/app/inventory"
                        target="_blank"
                      >
                        Odoo Inventory
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.odoo.com/app/manufacturing"
                        target="_blank"
                      >
                        Odoo Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.odoo.com/app/employees"
                        target="_blank"
                      >
                        Odoo HRM
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.odoo.com/app/field-service"
                        target="_blank"
                      >
                        Odoo Field Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.odoo.com/app/helpdesk"
                        target="_blank"
                      >
                        Odoo Helpdesk
                      </Link>
                    </li>
                     <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://www.odoo.com/app/fleet"
                        target="_blank"
                      >
                        Odoo Fleet
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="https://quickbooks.intuit.com/accounting/"
                        target="_blank"
                      >
                        QuickBooks
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="/ncx-point-of-sale"
                        target="_blank"
                      >
                        NCX Point of Sale
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${classes.dropdownitem}`}
                        href="/ncx-billing-book"
                        target="_blank"
                      >
                        NCX Billing Book
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className={`nav-item dropdown ${classes.NavItem}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" href="/services">
                    Startups & MVP Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/cloudsolutions">
                    Cloud Solutions & Management
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/softwaresolutions">
                    Software Product Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/ai">
                    Artificial Intelligence Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/training">
                    Training & IT Consultation
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/ui-ux-design">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/api">
                    API Development & Integration
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/staffing-solutions">
                    Outsourcing & Team Augumentation
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/white-label">
                    White Label App Customizations
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div>
            <MyButton
              text={buttonText}
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
