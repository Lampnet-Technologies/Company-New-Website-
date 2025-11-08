"use client";
import React, { useState } from "react";
import Link from "next/link";
import classes from "./About9.module.css";
import Button from "../Button/Button";
import ModalPage from "../Modal/page";

const About9 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState();
  const [message, setMessage] = useState("");

  const [learn, setLearn] = useState("Talk to Us");

  const clearFields = () => {
    setName("");
    setEmail("");
    setTel("");
    setMessage("");
  };
  const sendMail = async (e) => {
    e.preventDefault();
    // var re =
    //   /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    // if (re.test(tel) == false) {
    //   return toast.error("Invalid phone number", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //   });
    // }

    // console.log(name, email, tel, message);
    // const info = {
    //   name,
    //   email,
    //   tel,
    //   message,
    // };
    // if (
    //   !name ||
    //   name.trim() == "" ||
    //   !email ||
    //   email.trim() == "" ||
    //   !tel ||
    //   tel.trim() == "" ||
    //   !message ||
    //   message.trim() == ""
    // ) {
    //   return toast.error("Please fill out all the fields", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //   });
    // }
    // const response = await axios.post("http://localhost:4444/api/mail", info);
    // clearFields();
    // const result = await response.data;
    // toast.success(result.message, {
    //   position: toast.POSITION.BOTTOM_RIGHT,
    // });
    // console.log(result);
  };

  return (
    <div className={classes.About9Main}>
      <div className={`container ${classes.About9Parent}`}>
        <div className={classes.About9Child}>
          <h6>Get In Touch With Our Experts</h6>
          <h2>
            Do you have a project in mind or you want to start a conversation
            with us?
          </h2>
          <p>
            We’re ready assist you in brainstorming ideas and execution process
            about your upcoming product launch.
          </p>
          <h3>Our Contact Info</h3>
          <Link href="tel:+2349016472503" className={classes.AboutLink}>
          <p>+234 901 647 2503</p>
          </Link>
          <Link href="tel:+447429519773" className={classes.AboutLink}>
          <p>+44 7429 519773</p>
          </Link>
          <Link href="mailto:infodesk@lampnets.com" className={classes.AboutLink}>
          <p>Infodesk@lampnets.com</p>
          </Link>
        </div>

        <div className={classes.About9Bro}>
          <form onSubmit={(e) => sendMail(e)}>
            <input
              placeholder="Your full name*"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              placeholder="Your email address*"
              type="email"
              pattern="^[A-Z0-9+_.-]+@[A-Z0-9.-]+$"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              placeholder="Your phone number*"
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            ></input>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {/* <button type="submit">Book an appointment</button> */}
            <Button text={learn} type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default About9;
