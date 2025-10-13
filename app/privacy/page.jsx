import React from "react";
import styles from "./privacy.module.css";

const Privacy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: October 2025</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Introduction</h2>
          <p className={styles.text}>
            LampNet Solutions (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our services. We comply with
            applicable data protection laws across Africa, including the Nigeria
            Data Protection Regulation (NDPR) and other relevant African data
            protection frameworks.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>Personal Information:</h3>
            <ul className={styles.list}>
              <li>
                Contact information (name, email, phone number, business
                address)
              </li>
              <li>Company details and business information</li>
              <li>Payment and billing information</li>
              <li>Login credentials and account information</li>
              <li>Communication records and correspondence</li>
            </ul>
          </div>
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>Technical Information:</h3>
            <ul className={styles.list}>
              <li>IP addresses and device information</li>
              <li>Browser type and operating system</li>
              <li>Usage data and analytics</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </div>
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>
              Project-Related Information:
            </h3>
            <ul className={styles.list}>
              <li>Business requirements and specifications</li>
              <li>Project documentation and deliverables</li>
              <li>Feedback and support requests</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            3. How We Use Your Information
          </h2>
          <p className={styles.text}>We use collected information for:</p>
          <ul className={styles.list}>
            <li>Delivering and managing our IT services and solutions</li>
            <li>Processing payments and maintaining financial records</li>
            <li>
              Communicating with you about projects, services, and support
            </li>
            <li>Improving our services and developing new solutions</li>
            <li>Complying with legal obligations and protecting our rights</li>
            <li>Analyzing usage patterns to enhance user experience</li>
            <li>Sending marketing communications (with your consent)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Legal Basis for Processing</h2>
          <p className={styles.text}>We process your personal data based on:</p>
          <ul className={styles.list}>
            <li>
              <strong>Contract Performance:</strong> To fulfill our service
              agreements
            </li>
            <li>
              <strong>Legitimate Interests:</strong> For business operations and
              improvements
            </li>
            <li>
              <strong>Legal Obligations:</strong> To comply with applicable laws
            </li>
            <li>
              <strong>Consent:</strong> Where you have given explicit permission
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            5. Information Sharing and Disclosure
          </h2>
          <p className={styles.text}>We may share your information with:</p>
          <ul className={styles.list}>
            <li>
              <strong>Service Providers:</strong> Trusted third parties who
              assist in service delivery (cloud hosting, payment processors,
              analytics)
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law, court
              order, or governmental authority
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with mergers,
              acquisitions, or asset sales
            </li>
            <li>
              <strong>With Your Consent:</strong> When you explicitly authorize
              sharing
            </li>
          </ul>
          <p className={styles.textHighlight}>
            We do not sell, rent, or trade your personal information to third
            parties for marketing purposes.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Data Security</h2>
          <p className={styles.text}>
            We implement industry-standard security measures to protect your
            information, including encryption, secure servers, access controls,
            and regular security assessments. However, no method of transmission
            over the internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Data Retention</h2>
          <p className={styles.text}>
            We retain personal information for as long as necessary to fulfill
            the purposes outlined in this policy, comply with legal obligations,
            resolve disputes, and enforce agreements. Project-related data is
            typically retained for 7 years after project completion, or as
            required by law.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Your Rights</h2>
          <p className={styles.text}>
            Under applicable data protection laws, you have the right to:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Access:</strong> Request copies of your personal data
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate
              information
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your data (subject
              to legal requirements)
            </li>
            <li>
              <strong>Objection:</strong> Object to processing of your data
            </li>
            <li>
              <strong>Portability:</strong> Request transfer of your data
            </li>
            <li>
              <strong>Withdraw Consent:</strong> Withdraw consent for processing
            </li>
            <li>
              <strong>Lodge Complaints:</strong> File complaints with data
              protection authorities
            </li>
          </ul>
          <p className={styles.text}>
            To exercise these rights, contact us at{" "}
            <a href="mailto:privacy@lampnet.com" className={styles.link}>
              privacy@lampnet.com
            </a>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            9. Cookies and Tracking Technologies
          </h2>
          <p className={styles.text}>
            We use cookies and similar technologies to enhance user experience,
            analyze usage patterns, and improve our services. You can control
            cookie preferences through your browser settings, though disabling
            cookies may affect functionality.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            10. International Data Transfers
          </h2>
          <p className={styles.text}>
            As we serve clients across Africa, your information may be
            transferred to and processed in different African countries. We
            ensure appropriate safeguards are in place for such transfers in
            compliance with applicable laws.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Children&apos;s Privacy</h2>
          <p className={styles.text}>
            Our services are not directed to individuals under 18 years of age.
            We do not knowingly collect personal information from children. If
            we become aware of such collection, we will take steps to delete the
            information.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>12. Changes to This Policy</h2>
          <p className={styles.text}>
            We may update this Privacy Policy periodically. We will notify you
            of material changes via email or prominent notice on our website.
            Continued use of our services after changes constitutes acceptance
            of the updated policy.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>13. Contact Us</h2>
          <p className={styles.text}>
            For questions, concerns, or requests regarding this Privacy Policy
            or our data practices, please contact our Data Protection Officer
            at:
          </p>
          <div className={styles.contactBox}>
            <p>
              Email:{" "}
              <a href="mailto:privacy@lampnet.com" className={styles.link}>
                privacy@lampnet.com
              </a>
            </p>
            <p>Subject: Data Protection Inquiry</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
