import React, { useEffect } from "react";
import styles from './Home.module.css'; // Import the CSS Module
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate=useNavigate();
  useEffect(() => {
    // Disable scrolling when on the Home page
    document.body.style.overflow = 'hidden';

    // Clean up when leaving the Home page, re-enable scrolling
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  function handleShopNow(){
    navigate('/shop')
  }

  return (
    <div className={styles.heroSection}> {/* Use CSS module styles */}
      <div className={styles.content}>
        <h1 className={styles.Gio}>Gio</h1>
        <h1 className={styles.everything}>Everything you love</h1>
        <h1 className={styles.highlight}>in one place</h1>
        <p className={styles.subtext}>Amazing Discounts and offers for all</p>
        <button className={styles.shopButton} onClick={handleShopNow}>Shop Now!!</button>
        <div className={styles.socialIcons}>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>

      </div>
    </div>
  );
}

export default Home;
