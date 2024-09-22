import styles from "./Addons.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Addons(){
  useEffect(() => {
    document.querySelectorAll(".section-active")
      .forEach(elem => elem.classList.remove('section-active'));
    document.querySelector(".section-3-circle").classList.add("section-active");
  }, []);

  return(
    <form id="form-part-3" className={styles["add-ons"]}>
      add ons 
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