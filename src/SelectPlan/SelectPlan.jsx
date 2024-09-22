import styles from "./SelectPlan.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

function SelectPlan(){
  useEffect(()=>{
    document.querySelectorAll('.section-active')
      .forEach(elem => {
        elem.classList.remove('section-active');
      });
    document.querySelector(".section-2-circle")
      .classList.add("section-active");
  }, []);

  return(
    <form action="#" method="GET" className={styles[`select-plan`]}>
      <h1 className="title">
        Select your plan
      </h1>
      <h5>
        You have the option of monthly or yearly billing.
      </h5>
      <div className={styles["options"]}>
        <div className={styles.arcade}>
          <img src={arcadeIcon} alt="arcade image"/>
          <div className={styles["option-title"]}>
            Arcade
          </div>
          <div>
            $9/mo
          </div>
        </div>

        <div className="advanced">
          <img src={advancedIcon} alt="advanced image"/>
          <div className={styles["option-title"]}>
            Advanced
          </div>
          <div>
            $12/mo
          </div>
        </div>

        <div className="pro">
          <img src={proIcon} alt="pro image"/>
          <div className={styles["option-title"]}>
            Pro
          </div>
          <div>
            $15/mo
          </div>
        </div>
      </div>
      <div className={styles["toggle-container"]}>
        <span className={styles.monthly}>
          Monthly
        </span>
        <div className={`${styles["outer-border"]}`} 
                      onClick={() => {
                        const outerElem = document.querySelector(`.${styles[`outer-border`]}`).classList;
                        const circleElem = document.querySelector(`.${styles[`circle`]}`).classList;
                        const monthlyElem = document.querySelector(`.${styles[`monthly`]}`);
                        const yearlyElem = document.querySelector(`.${styles[`yearly`]}`);

                        if(outerElem.contains(styles["clicked-outer-border"])){
                          outerElem.remove(styles["clicked-outer-border"]);
                          circleElem.remove(styles["clicked-circle"]);

                          monthlyElem.style.color="hsl(213, 96%, 18%)";
                          yearlyElem.style.color="hsl(229, 24%, 87%)";
                        } else {
                          outerElem.add(styles["clicked-outer-border"]);
                          circleElem.add(styles["clicked-circle"]);

                          yearlyElem.style.color="hsl(213, 96%, 18%)";
                          monthlyElem.style.color="hsl(229, 24%, 87%)";
                        }
                      }}>
          <div className={`${styles[`circle`]} `}>
            {/*this is for creating a circle.*/}
          </div>
        </div>
        <span className={styles.yearly}>
          Yearly
        </span>
      </div>
      <div className="buttons">
        <Link to="/your-info" className="go-back-button">
          Go Back
        </Link>
        <Link to="/add-ons" className="next-step-button">          
          Next Step
        </Link>
      </div>
    </form>
  );
}

export default SelectPlan