import { Link } from "react-router-dom";
import styles from "./YourInfo.module.css";
import { useEffect } from 'react';

function YourInfo(){
  useEffect(()=>{
    document.querySelectorAll('.section-active')
      .forEach(elem => {
        elem.classList.remove('section-active');
      });
    document.querySelector(".section-1-circle")
      .classList.add("section-active");
  }, []);

  return (
    <form className={`${styles[`personal-info`]}`}>
      <h1 className="title">
        Personal Info
      </h1>
      <h5 className="sub-title">
        Please provide your name, email address, and phone number.
      </h5>
      <div className="name">
        Name
      </div>
      <input type="text" className="name-input" placeholder="Vanessa Mint"/>
      <div className="email">
        Email Address
      </div>
      <input type="text" className="email-input" placeholder="vanessamint@gmail.com"/>
      <div className="phone">
        Phone Number
      </div>
      <input type="number" className="phone-input" placeholder="e.g.+1 234 567 890"/>
      <div className="buttons">
        <div>

        </div>
        <Link to="/select-plan" className="next-step-button">
          Next Step
        </Link>
      </div>
    </form>
  );
}

export default YourInfo