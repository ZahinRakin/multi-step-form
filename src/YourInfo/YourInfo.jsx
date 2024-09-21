import { Link } from "react-router-dom";
import styles from "./YourInfo.module.css";

function YourInfo(){
  return (
    <form className={styles[`personal-info`]} id="form-part-1">
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
        <button className="next-step-button">
          <Link to="/select-plan">
            Next Step
          </Link>
        </button>
      </div>
    </form>
  );
}

export default YourInfo