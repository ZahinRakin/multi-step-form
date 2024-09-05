import styles from "./SideBar.module.css";
import YourInfo from "../YourInfo/YourInfo.jsx";
import SelectPlan from "../SelectPlan/SelectPlan.jsx";
import Addons from "../Addons/Addons.jsx";
import Summery from "../Addons/Addons.jsx";


function SideBar(){
  return (
    <div className={styles.sidebar}>
      <a className={styles.section} href={<YourInfo/>}>
        <div className={styles.circle}>
          1
        </div>
        <span className={styles.step}>
          STEP 1
        </span>
        <span className={styles.title}>
          YOUR INFO
        </span>
      </a>
      <a className={styles.section} href={<SelectPlan/>}>
        <div className={styles.circle}>
          2
        </div>
        <span className={styles.step}>
          STEP 2
        </span>
        <span className={styles.title}>
          SELECT PLAN
        </span>
      </a>
      <a className={styles.section} href={<Addons/>}>
        <div className={styles.circle}>
          3
        </div>
        <span className={styles.step}>
          STEP 3
        </span>
        <span className={styles.title}>
          ADD-ONS
        </span>
      </a>
      <a className={styles.section} href={<Summery/>}>
        <div className={styles.circle}>
          4
        </div>
        <span className={styles.step}>
          STEP 4
        </span>
        <span className={styles.title}>
          SUMMERY
        </span>
      </a>
    </div>
  );
}

export default SideBar