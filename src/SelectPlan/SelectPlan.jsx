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
        console.log(elem);
        elem.classList.remove('section-active');
      });
    document.querySelector(".section-2-circle")
      .classList.add("section-active");
  }, []);

  return(
    <form action="#" method="GET">
      <h1 className="title">
        Select your plan
      </h1>
      <span className="short-message">
        You have the option of monthly or yearly billing.
      </span>
      <div className="options">
        <div className="arcade">
          <img src={arcadeIcon} alt="arcade image"/> {/*why this src isnt'working */}
          <div className="option-title">
            Arcade
          </div>
          <div className="price">
            $9/mo
          </div>
        </div>

        <div className="advanced">
          <img src={advancedIcon} alt="advanced image"/>
          <div className="option-title">
            Advanced
          </div>
          <div className="price">
            $12/mo
          </div>
        </div>

        <div className="pro">
          <img src={proIcon} alt="pro image"/>
          <div className="option-title">
            Pro
          </div>
          <div className="price">
            $15/mo
          </div>
        </div>
      </div>
      <div className="monthly-yearly">
        <span>Monthly</span>
        {/* here I have to insert a toggle */}
        <span>Yearly</span>
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