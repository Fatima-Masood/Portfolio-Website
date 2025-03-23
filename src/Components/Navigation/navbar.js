import React from "react";
import { Link } from "react-scroll"; // For smooth scrolling
import styles from "./navbar.module.css"; // Import CSS module

const CustomNavigation = ({ email, setEmail }) => {
  const handleLogout = () => {
    setEmail(""); 
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="home" smooth={true} duration={500}>
          PORTFOLIO
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          {!email ? (
            <>
              <li>
                <button className={styles.customButton}
                  onClick={() => console.log("Navigate to Signup")}
                > SignUp </button>
                <button className={styles.customButton}
                  onClick={() => console.log("Navigate to Login")}
                > Login </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="home" smooth={true} duration={500}>
                  <button className={styles.customButton}> Home </button>
                </Link>
                <Link to="about" smooth={true} duration={500}>
                  <button className={styles.customButton}> About </button>
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                  <button className={styles.customButton}> Projects </button>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                  <button className={styles.customButton}> Contact </button>
                </Link>
                <button className={styles.customButton} onClick={handleLogout}> Logout </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default CustomNavigation;