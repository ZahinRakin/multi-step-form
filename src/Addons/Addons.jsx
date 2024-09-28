import styles from "./Addons.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CheckBox from "../utilities/CheckBox.jsx";

function Addons(){
  useEffect(() => {
    document.querySelectorAll(".section-active")
      .forEach(elem => elem.classList.remove('section-active'));
    document.querySelector(".section-3-circle").classList.add("section-active");
  }, []);

  return(
    <form id="form-part-3" className={`${styles["add-ons"]} main-element`}>
      <h1 className="title">
        Pick add-ons
      </h1>
      <h5>
        Add-ons help enhance your gaming experience.
      </h5>
      <div className={styles[`add-on-container`]}>
        <CheckBox id="online_services" title="Online services" subtitle="Access to multiplayer games" billing="monthly" 
          price={{
            monthly: 1,
            yearly: 10,
          }}/>
        <CheckBox id="larger_storage" title="Larger storage" subtitle="Extra 1TB of cloud save" billing="monthly" 
          price={{
            monthly: 2,
            yearly: 20,
          }}/>
        <CheckBox id="customizable_profile" title="Customizable Profile" subtitle="Custom theme on your profile" billing="monthly" 
          price={{
            monthly: 2,
            yearly: 20,
          }}/>
      </div>
      <div className="buttons">
        <Link to="/select-plan" className="go-back-button">
          Go Back
        </Link>
        <Link to="/summary" className="next-step-button">          
          Next Step
        </Link>
      </div>
    </form>
  );
}

export default Addons