import styles from "./SelectPlan.module.css";
import { Link } from "react-router-dom";

function SelectPlan(){
  return(
    <from action="#" method="GET" name="select-plan">
      <h1 className="title">
        Select your plan
      </h1>
      <span className="short-message">
        You have the option of monthly or yearly billing.
      </span>
      <div className="options">
        <div className="arcade">
          <img src="../assets/images/icon-arcade.svg" alt="arcade image"/>
          <div className="option-title">
            Arcade
          </div>
          <div className="price">
            $9/mo
          </div>
        </div>

        <div className="advanced">
          <img src="../assets/images/icon-advanced.svg" alt="advanced image"/>
          <div className="option-title">
            Advanced
          </div>
          <div className="price">
            $12/mo
          </div>
        </div>

        <div className="pro">
          <img src="../assets/images/icon-pro.svg" alt="pro image"/>
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
        <button className="next-step-button">
          <Link to="/add-ons">
            Next Step
          </Link>
        </button>
      </div>
    </from>
  );
}

export default SelectPlan