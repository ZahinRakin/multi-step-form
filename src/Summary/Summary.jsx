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
    <form id="form-part-4" className={`${styles.summary} main-element`}>
      <h1 className="title">
        Finishing up
      </h1>
      <h5>
        Double-check everything looks OK before confirming.
      </h5>
      
      <div className={styles.services}>
        <div className={`${styles.plan} ${styles[`grid-template`]}`}>
          <div className={styles[`service-info`]}>
            <span>
              Arcade(Monthly)
            </span>
            <div>
              <Link to="/select-plan" className={`${styles[`change-button`]}`}>
                Change
              </Link>
            </div>
          </div>
          <div className={`${styles[`service-price`]} ${styles[`price-portion`]}`}>
            $9/mo
          </div>
        </div>
        <div className={`${styles[`add-ons`]}`}>
          <div className={`${styles[`add-on`]} ${styles[`grid-template`]}`}>
            <div className={`${styles[`add-on-title`]} color-gray`}>
              Online service
            </div>
            <div className={`${styles[`add-on-price`]} ${styles[`price-portion`]}`}>
              +$1/mo
            </div>
          </div>
          <div className={`${styles[`add-on`]} ${styles[`grid-template`]}`}>
            <div className={`${styles[`add-on-title`]} color-gray`}>
              Larger Storage
            </div>
            <div className={`${styles[`add-on-price`]} ${styles[`price-portion`]}`}>
              +$2/mo
            </div>
          </div>
        </div>
      </div>  

      <div className={`${styles[`total-bill`]} ${styles[`grid-template`]}`}>
        <div className="color-gray">
          Total(per month)
        </div>
        <div className={`${styles[`total-price`]} ${styles[`price-portion`]}`}>
          +$12/mo
        </div>
      </div>

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