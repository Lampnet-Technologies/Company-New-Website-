"use client";
import React, { useState } from 'react';
import styles from './faq.module.css';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What services does LampNet Solutions provide?',
          a: 'LampNet Solutions specializes in Mobile Application Development, Enterprise Solutions, IT Consulting, Security Solutions, and Cloud-based Technologies. We provide customized solutions tailored to businesses across Africa, ensuring scalability, security, and user-friendliness.'
        },
        {
          q: 'Which countries does LampNet serve?',
          a: 'We serve businesses across the African continent, with our primary operations based in West Africa. As a remote-based agile company, we can effectively support clients regardless of their location within Africa.'
        },
        {
          q: 'What makes LampNet different from other IT companies?',
          a: 'LampNet is uniquely positioned as an African technology company that leverages local talent to deliver world-class solutions. We combine deep understanding of the African market with international standards, offering personalized service and comprehensive support throughout your technology journey.'
        }
      ]
    },
    {
      category: 'Services & Solutions',
      questions: [
        {
          q: 'Do you offer custom software development?',
          a: 'Yes, we specialize in customized solutions tailored to your specific business needs. Our team works closely with you to understand your requirements and deliver solutions that drive growth, efficiency, and success.'
        },
        {
          q: 'What is your approach to mobile app development?',
          a: 'We follow an agile development methodology, ensuring flexibility and continuous improvement. Our mobile applications are designed for both iOS and Android platforms, with a focus on user experience, performance, and security.'
        },
        {
          q: 'Do you provide ongoing support after project completion?',
          a: 'Absolutely. We offer comprehensive support services to ensure smooth technology adoption and utilization. This includes maintenance, updates, troubleshooting, and continuous optimization of your solutions.'
        },
        {
          q: 'Can you help migrate our systems to the cloud?',
          a: 'Yes, we have extensive experience in cloud-based technologies and can assist with cloud migration, implementation, and management. We ensure secure, scalable, and cost-effective cloud solutions tailored to your business needs.'
        }
      ]
    },
    {
      category: 'Engagement & Pricing',
      questions: [
        {
          q: 'How do you structure your pricing?',
          a: 'Our pricing is customized based on project scope, complexity, and duration. We offer both fixed-price projects and time-and-materials arrangements. Contact us for a detailed quote tailored to your specific requirements.'
        },
        {
          q: 'What is the typical project timeline?',
          a: 'Project timelines vary depending on complexity and scope. Simple mobile applications may take 2-3 months, while enterprise solutions can range from 3-12 months. We provide detailed timelines during the consultation phase.'
        },
        {
          q: 'Do you sign NDAs and confidentiality agreements?',
          a: 'Yes, we take confidentiality seriously and are happy to sign Non-Disclosure Agreements before discussing your project details. Your intellectual property and sensitive information are always protected.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          q: 'What are your support hours?',
          a: 'Our standard support hours are Monday to Friday, 8:00 AM - 6:00 PM WAT. We also offer premium support packages with extended hours and weekend coverage for mission-critical applications.'
        },
        {
          q: 'How quickly do you respond to support requests?',
          a: 'Response times depend on the severity of the issue. Critical issues receive response within 2 hours, high-priority within 4 hours, and standard requests within 24 hours during business days.'
        },
        {
          q: 'Do you provide training for our team?',
          a: 'Yes, we include comprehensive training as part of our solutions delivery. We ensure your team is fully equipped to utilize the technology effectively, with documentation and ongoing support available.'
        }
      ]
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.subtitle}>
          Find answers to common questions about LampNet Solutions, our services, and how we can 
          help your business succeed.
        </p>

        {faqs.map((category, catIndex) => (
          <div key={catIndex} className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{category.category}</h2>
            <div className={styles.questionsContainer}>
              {category.questions.map((faq, faqIndex) => {
                const globalIndex = `${catIndex}-${faqIndex}`;
                const isOpen = openFaq === globalIndex;
                
                return (
                  <div key={faqIndex} className={styles.faqItem}>
                    <button
                      onClick={() => toggleFaq(globalIndex)}
                      className={styles.faqButton}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.question}>{faq.q}</span>
                      <svg 
                        className={`${styles.icon} ${isOpen ? styles.iconRotated : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className={styles.answer}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Still have questions?</h3>
          <p className={styles.ctaText}>
            Can&apos;t find the answer you&apos;re looking for? Our support team is ready to help.
          </p>
          <a href="mailto:support@lampnet.com" className={styles.ctaButton}>
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;