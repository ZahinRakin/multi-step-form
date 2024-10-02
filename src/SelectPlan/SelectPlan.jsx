import styles from "./SelectPlan.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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

  const [billing, setBilling] = useState("monthly");

  function changePrice(state){
    const arcadeElem = document.querySelector(`.arcadePrice`);
    const advancedElem = document.querySelector(`.advancedPrice`);
    const proElem = document.querySelector(`.proPrice`);

    if(state === 'monthly'){
      setBilling("monthly");
      arcadeElem.innerHTML = `<span class="color-gray">$9/mo</span>`;
      advancedElem.innerHTML = `<span class="color-gray">$12</span>`;
      proElem.innerHTML = `<span class="color-gray">$15/mo</span>`;
    } else {
      setBilling("yearly");
      arcadeElem.innerHTML = `
        <span class="color-gray">
          $90/yr
        </span><br/>
        <span class="color-blue">
          2 months free
        </span>`;
      advancedElem.innerHTML = `
        <span class="color-gray">
          $120/yr
        </span><br/>
        <span class="color-blue">
          2 months free
        </span>`;
      proElem.innerHTML = `
        <span class="color-gray">
          $150/yr
        </span><br/>
        <span class="color-blue">
          2 months free
        </span>`;
    }
  }

  return(
    <form action="#" method="GET" className={`${styles[`select-plan`]} main-element`}>
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
      <Toggle changePrice={changePrice}/>    {/*here might be some syntax error. But I like it. */}
      <div className="buttons">
        <Link to="/" className="go-back-button">
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