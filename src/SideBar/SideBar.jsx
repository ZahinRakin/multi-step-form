import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

function SideBar() {
  const focusedOn = useRef(1);

  useEffect(() => {
    // Select the element with class section-X and focus on it
    const focusedElement = document.querySelector(`.section-${focusedOn.current}`);
    if (focusedElement) {
      focusedElement.focus();
    }
  }, []);

  return (
    <div className={styles.sidebar}>
      <Link to="/your-info" className={`${styles.section} section-1`} tabIndex="-1">
        <div className={styles.circle}>
          1
        </div>
        <span className={styles.step}>
          STEP 1
        </span>
        <span className={styles.title}>
          YOUR INFO
        </span>
      </Link>
      <Link to="/select-plan" className={`${styles.section} section-2`} tabIndex="-1">
        <div className={styles.circle}>
          2
        </div>
        <span className={styles.step}>
          STEP 2
        </span>
        <span className={styles.title}>
          SELECT PLAN
        </span>
      </Link>
      <Link to="/add-ons" className={`${styles.section} section-3`} tabIndex="-1">
        <div className={styles.circle}>
          3
        </div>
        <span className={styles.step}>
          STEP 3
        </span>
        <span className={styles.title}>
          ADD-ONS
        </span>
      </Link>
      <Link to="/summary" className={`${styles.section} section-4`} tabIndex="-1">
        <div className={styles.circle}>
          4
        </div>
        <span className={styles.step}>
          STEP 4
        </span>
        <span className={styles.title}>
          SUMMARY
        </span>
      </Link>
    </div>
  );
}

export default SideBar;
