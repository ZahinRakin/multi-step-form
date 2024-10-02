import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Link to="/" className={`${styles.section} section-1`}>
        <div className={`${styles.circle} section-1-circle`}>
          1
        </div>
        <span className={styles.step}>
          STEP 1
        </span>
        <span className={styles.title}>
          YOUR INFO
        </span>
      </Link>
      <Link to="/select-plan" className={`${styles.section} section-2`}>
        <div className={`${styles.circle} section-2-circle`}>
          2
        </div>
        <span className={styles.step}>
          STEP 2
        </span>
        <span className={styles.title}>
          SELECT PLAN
        </span>
      </Link>
      <Link to="/add-ons" className={`${styles.section} section-3`}>
        <div className={`${styles.circle} section-3-circle`}>
          3
        </div>
        <span className={styles.step}>
          STEP 3
        </span>
        <span className={styles.title}>
          ADD-ONS
        </span>
      </Link>
      <Link to="/summary" className={`${styles.section} section-4`}>
        <div className={`${styles.circle} section-4-circle`}>
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
