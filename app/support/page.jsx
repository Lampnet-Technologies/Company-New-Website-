import React from "react";
import styles from "./support.module.css";
import ButtonFour from "../component/Button/ButtonFour"

const Support = () => {
  return (
    <div className={styles.container}>
      <ButtonFour />
      <div className={styles.content}>
        <h1 className={styles.title}>Support Center</h1>

        <div className={styles.intro}>
          <p>
            At LampNet Solutions, we&apos;re committed to providing comprehensive
            support to ensure your technology solutions operate smoothly and
            efficiently. Our team of dedicated professionals is here to assist
            you every step of the way.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <svg
                className={styles.icon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3>Email Support</h3>
            </div>
            <p className={styles.cardText}>
              For general inquiries and non-urgent matters:
            </p>
            <a href="mailto:support@lampnets.com" className={styles.link}>
              support@lampnets.com
            </a>
            <p className={styles.cardText}>For technical support:</p>
            <a href="mailto:infodesk@lampnets.com" className={styles.link}>
              infodesk@lampnets.com
            </a>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <svg
                className={styles.icon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3>Business Hours</h3>
            </div>
            <p className={styles.cardText}>
              Monday - Friday: 9:00 AM - 5:00 PM WAT
            </p>
            <p className={styles.cardText}>Saturday: 10:00 AM - 2:00 PM WAT</p>
            <p className={styles.cardText}>Sunday: Closed</p>
            <p className={styles.cardSubtext}>
              Emergency support available for premium clients
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <svg
                className={styles.icon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h3>Phone Support</h3>
            </div>
            <p className={styles.cardText}>West Africa Region:</p>
            <p className={styles.phoneNumber}>+234 816 663 7303</p>
            <p className={styles.cardSubtext}>
              Available during business hours
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <svg
                className={styles.icon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h3>Remote Support</h3>
            </div>
            <p className={styles.cardText}>
              As a remote-based company, we provide virtual support across
              Africa through secure remote access tools and video conferencing.
            </p>
          </div>
        </div>

        <div className={styles.prioritySection}>
          <h3 className={styles.priorityTitle}>
            Support Ticket Priority Levels
          </h3>
          <ul className={styles.priorityList}>
            <li>
              <strong>Critical:</strong> System down or major functionality
              broken - Response within 2 hours
            </li>
            <li>
              <strong>High:</strong> Significant impact on operations - Response
              within 4 hours
            </li>
            <li>
              <strong>Medium:</strong> Moderate impact, workaround available -
              Response within 8 hours
            </li>
            <li>
              <strong>Low:</strong> Minor issues or questions - Response within
              24 hours
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Support;
