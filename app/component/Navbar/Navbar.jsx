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
    <nav class={`navbar navbar-expand-lg navbar-light ${classes.NavGrandMain}`}>
      <div class={`container ${classes.NavbarMain}`}>
        <a class="navbar-brand" href="#">
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
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class={`collapse navbar-collapse ${classes.Parent}`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav mx-auto">
            <li class={`nav-item dropdown ${classes.NavItem}`}>
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item" href="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/about">
                    About us
                  </Link>
                </li>
              </ul>
            </li>

            <li class={`nav-item dropdown ${classes.dropdown}`}>
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <div
                class={`dropdown-menu ${classes.dropdownmenu} `}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div>
                  <ul>
                    <li href="/courier-x">
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/courier-x"
                      >
                        Courier-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/fleed-x"
                      >
                        Food-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/med-x"
                      >
                        Mex-X
                      </Link>
                    </li>

                    <li>
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/co-workspace-x"
                      >
                        Workspace-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/restaurant360-x"
                      >
                        Restaurant
                      </Link>
                    </li>
                    <li>
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/hotel-x"
                      >
                        Hotel-X
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/estate-x"
                      >
                        Estate-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/school-x"
                      >
                        School360-x
                      </Link>
                    </li>
                    <li>
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/fintech-x"
                      >
                        Fintech360-x
                      </Link>
                    </li>
                    <li>
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/thrift-x"
                      >
                        Thrift-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/order-x"
                      >
                        Order-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/uber-x"
                      >
                        Uber-X
                      </Link>
                    </li>
                  </ul>
                  {/* <ul>
                    <li>
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/order-x"
                      >
                        Order-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/uber-x"
                      >
                        Uber-X
                      </Link>
                    </li>
                    <li>
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/restaurant360-x"
                      >
                        Restaurant
                      </Link>
                    </li>
                    <li>
                      <Link
                        class={`dropdown-item ${classes.dropdownitem}`}
                        href="/hotel-x"
                      >
                        Hotel-X
                      </Link>
                    </li>
                  </ul> */}
                </div>
              </div>
            </li>

            <li class={`nav-item dropdown ${classes.NavItem}`}>
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blog
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item" href="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </li>

            <li class={`nav-item dropdown ${classes.NavItem}`}>
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item" href="/services">
                    Startups
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/cloudsolutions">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/softwaresolutions">
                    Software
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/api">
                    Api Development
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/white-label">
                    White Label
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/training">
                    Training
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/ui-ux-design">
                    Ui-Ux-Design
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/staffing-solutions">
                    Staffing Solution
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div>
            <MyButton
              text={buttonText}
              type="button"
              class="btn btn-primary"
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
