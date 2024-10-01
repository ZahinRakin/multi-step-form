import thank_img from "../assets/images/icon-thank-you.svg";
import styles from "./ThankYou.module.css";

function ThankYou(){
  return(
    <div className={`${styles.container} main-element`}>
      <img src={thank_img} alt="Thank You" />
      <h1 className="color-blue">
        Thank You!
      </h1>
      <p className="color-gray">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
}

export default ThankYou