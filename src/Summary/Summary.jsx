import styles from "./Summary.module.css";
import { Link } from "react-router-dom";
import { useEffect } from 'react';

function Summary(){
  useEffect(()=>{
    document.querySelectorAll('.section-active')
      .forEach(elem => {
        elem.classList.remove('section-active');
      });
    document.querySelector(".section-4-circle")
      .classList.add("section-active");
  }, []);

  return(
  <form id="form-part-4" className={styles["summary"]}>
      Summary
      <div className="buttons">
        <Link to="/add-ons" className="go-back-button">
          Go Back
        </Link>
        <button type="submit" className="next-step-button">          
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Summary