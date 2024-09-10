import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function SideBar() {
  const [activeSection, setActiveSection] = useState(1); // Keeps track of the active section

  function changeFocus(id) {
    setActiveSection(id); // Update active section
  }

  return (
    <div className={styles.sidebar}>
      <Link to="/your-info" className={`${styles.section} section-1`} onClick={() => changeFocus(1)}>
        <div className={`${styles.circle} section-1-circle ${activeSection === 1 ? styles['section-active'] : ''}`}>
          1
        </div>
        <span className={styles.step}>
          STEP 1
        </span>
        <span className={styles.title}>
          YOUR INFO
        </span>
      </Link>
      <Link to="/select-plan" className={`${styles.section} section-2`} onClick={() => changeFocus(2)}>
        <div className={`${styles.circle} section-2-circle ${activeSection === 2 ? styles['section-active'] : ''}`}>
          2
        </div>
        <span className={styles.step}>
          STEP 2
        </span>
        <span className={styles.title}>
          SELECT PLAN
        </span>
      </Link>
      <Link to="/add-ons" className={`${styles.section} section-3`} onClick={() => changeFocus(3)}>
        <div className={`${styles.circle} section-3-circle ${activeSection === 3 ? styles['section-active'] : ''}`}>
          3
        </div>
        <span className={styles.step}>
          STEP 3
        </span>
        <span className={styles.title}>
          ADD-ONS
        </span>
      </Link>
      <Link to="/summary" className={`${styles.section} section-4`} onClick={() => changeFocus(4)}>
        <div className={`${styles.circle} section-4-circle ${activeSection === 4 ? styles['section-active'] : ''}`}>
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
