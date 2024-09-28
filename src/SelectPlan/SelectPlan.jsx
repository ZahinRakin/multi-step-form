import styles from "./SelectPlan.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import Toggle from "../utilities/Toggle.jsx";

function SelectPlan(){
  useEffect(()=>{
    document.querySelectorAll('.section-active')
      .forEach(elem => {
        elem.classList.remove('section-active');
      });
    document.querySelector(".section-2-circle")
      .classList.add("section-active");
  }, []);


  function changeBorder(e){
    document.querySelectorAll(`.${styles[`changed-border`]}`)
      .forEach(elem => elem.classList.remove(`${styles[`changed-border`]}`));
    
    e.currentTarget.classList.add(`${styles[`changed-border`]}`);
  }

  return(
    <form action="#" method="GET" className={styles[`select-plan`]}>
      <h1 className="title">
        Select your plan
      </h1>
      <h5>
        You have the option of monthly or yearly billing.
      </h5>
      <div className={styles["options"]}>
        <div className={styles[`pay-option`]} onClick={(e) => changeBorder(e)}>
          <img src={arcadeIcon} alt="arcade image"/>
          <div className={styles["option-title"]}>
            Arcade
          </div>
          <div className="arcadePrice">
            <span className="color-gray">
              $9/mo
            </span>
          </div>
        </div>

        <div className={styles[`pay-option`]} onClick={(e) => changeBorder(e)}>
          <img src={advancedIcon} alt="advanced image"/>
          <div className={styles["option-title"]}>
            Advanced
          </div>
          <div className="advancedPrice">
            <span className="color-gray">
              $12/mo
            </span>
          </div>
        </div>

        <div className={styles[`pay-option`]} onClick={(e) => changeBorder(e)}>
          <img src={proIcon} alt="pro image"/>
          <div className={styles["option-title"]}>
            Pro
          </div>
          <div className="proPrice">
            <span className="color-gray">
              $15/mo
            </span>
          </div>
        </div>
      </div>
      <Toggle/>
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