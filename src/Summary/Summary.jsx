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
      <div className="container">
        <h1 className="title">
          Finishing up
        </h1>
        <h5 className="sub-title">
          Double-check everything looks OK before confirming.
        </h5>
        <div className="services">
          <div className="plan">
            <div className="service-info">
              <span>
                Arcade(Monthly)
              </span>

              <Link to="/select-plan">
                Change
              </Link>
            </div>
            <div className="service-price">
              $9/mo
            </div>
          </div>
          <div className="add-ons">
            <div className="add-on">
              <div className="title">
                Online service
              </div>
              <div className="add-on-price">
                +$1/mo
              </div>
            </div>
            <div className="add-on">
              <div className="title">
                Larger Storage
              </div>
              <div className="add-on-price">
                +$2/mo
              </div>
            </div>
          </div>
          <div className="total-bill">
            <div>
              Total(per month)
            </div>
            <div>
              +$12/mo
            </div>
          </div>
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