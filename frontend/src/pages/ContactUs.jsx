import React from "react";
import styles from "./Contact.module.css"; // Import the CSS Module

function ContactUs() {
  return (
    <div className={styles.contactSection}>
      <div className={styles.contactContent}>
        <h1 className={styles.contactTitle}>Contact Us</h1>
        <p className={styles.contactMessage}>
          For more information, contact us at: <strong>+91 (123) 456-7890</strong>
        </p>
        <p className={styles.contactMessage}>
          Or email us at: <strong><a href="mailto:info@example.com">gio@shopping.com</a></strong>
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
