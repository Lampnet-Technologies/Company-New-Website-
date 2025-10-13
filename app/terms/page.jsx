import React from 'react';
import styles from './terms.module.css';

const Terms = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last Updated: October 2025</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Agreement to Terms</h2>
          <p className={styles.text}>
            By accessing or using LampNet Solutions&apos; services, you agree to be bound by these 
            Terms of Service and all applicable laws and regulations. If you do not agree with 
            any of these terms, you are prohibited from using or accessing our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Services Description</h2>
          <p className={styles.text}>
            LampNet Solutions provides IT consulting, mobile application development, enterprise 
            solutions, security services, and cloud-based technology solutions. The specific scope 
            of services will be detailed in individual service agreements or statements of work.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Client Responsibilities</h2>
          <p className={styles.text}>Clients are responsible for:</p>
          <ul className={styles.list}>
            <li>Providing accurate and complete information necessary for service delivery</li>
            <li>Timely payment of all fees as specified in service agreements</li>
            <li>Maintaining confidentiality of login credentials and account information</li>
            <li>Ensuring compliance with all applicable laws in their use of our services</li>
            <li>Providing necessary access, resources, and cooperation for project execution</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Intellectual Property Rights</h2>
          <p className={styles.text}>
            <strong>Client IP:</strong> All intellectual property provided by the client remains 
            the client&apos;s property. Clients grant LampNet a license to use such IP solely for 
            delivering the contracted services.
          </p>
          <p className={styles.text}>
            <strong>Deliverables:</strong> Upon full payment, clients receive ownership rights to 
            custom-developed solutions as specified in the service agreement. LampNet retains rights 
            to underlying frameworks, methodologies, and reusable components.
          </p>
          <p className={styles.text}>
            <strong>LampNet IP:</strong> All proprietary tools, methodologies, frameworks, and 
            pre-existing intellectual property of LampNet remain our exclusive property.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Payment Terms</h2>
          <p className={styles.text}>
            Payment terms are specified in individual service agreements. Generally, projects require 
            an initial deposit, milestone payments, and final payment upon completion. Late payments 
            may incur interest charges and may result in suspension of services. All fees are 
            non-refundable unless otherwise specified in writing.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Confidentiality</h2>
          <p className={styles.text}>
            Both parties agree to maintain confidentiality of all proprietary and sensitive information 
            shared during the business relationship. This obligation survives termination of services 
            and continues indefinitely unless the information becomes publicly available through no 
            fault of the receiving party.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Warranties and Disclaimers</h2>
          <p className={styles.text}>
            LampNet warrants that services will be performed in a professional and workmanlike manner 
            consistent with industry standards. However, we do not warrant that services will be 
            error-free or uninterrupted.
          </p>
          <p className={styles.textWarning}>
            EXCEPT AS EXPRESSLY PROVIDED, ALL SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF 
            ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF 
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Limitation of Liability</h2>
          <p className={styles.text}>
            To the maximum extent permitted by law, LampNet&apos;s total liability for any claims arising 
            from services shall not exceed the total amount paid by the client for the specific 
            services giving rise to the claim. LampNet shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages, including loss of profits, 
            data, or business opportunities.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Termination</h2>
          <p className={styles.text}>
            Either party may terminate services with written notice as specified in the service 
            agreement. Upon termination, the client shall pay for all services performed up to the 
            termination date. LampNet may immediately terminate services if the client breaches these 
            terms or fails to make timely payments.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Governing Law</h2>
          <p className={styles.text}>
            These Terms shall be governed by and construed in accordance with the laws of Nigeria 
            and applicable African regional agreements. Any disputes shall be resolved through 
            arbitration in accordance with the Arbitration and Conciliation Act of Nigeria.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Changes to Terms</h2>
          <p className={styles.text}>
            LampNet reserves the right to modify these Terms at any time. We will provide notice of 
            material changes via email or through our website. Continued use of services after changes 
            constitutes acceptance of modified Terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>12. Contact Information</h2>
          <p className={styles.text}>
            For questions about these Terms, please contact us at{' '}
            <a href="mailto:legal@lampnet.com" className={styles.link}>legal@lampnet.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;