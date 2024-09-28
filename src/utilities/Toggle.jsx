import styles from "./Toggle.module.css";

function Toggle(props) {
  function handleToggle (){
    const outerElem = document.querySelector(`.${styles[`outer-border`]}`).classList;
    const circleElem = document.querySelector(`.${styles[`circle`]}`).classList;
    const monthlyElem = document.querySelector(`.${styles[`monthly`]}`);
    const yearlyElem = document.querySelector(`.${styles[`yearly`]}`);

    if(outerElem.contains(styles["clicked-outer-border"])){ //monthly
      outerElem.remove(styles["clicked-outer-border"]);
      circleElem.remove(styles["clicked-circle"]);

      monthlyElem.style.color="hsl(213, 96%, 18%)";
      yearlyElem.style.color="hsl(229, 24%, 87%)";

      props.changePrice("monthly");
    } else {                                               //yearly
      outerElem.add(styles["clicked-outer-border"]);
      circleElem.add(styles["clicked-circle"]);

      yearlyElem.style.color="hsl(213, 96%, 18%)";
      monthlyElem.style.color="hsl(229, 24%, 87%)";

      props.changePrice("yearly");
    }
  }

  return (
    <div className={styles["toggle-container"]}>
      <span className={styles.monthly}>
        Monthly
      </span>
        <div className={styles[`outer-border`]} onClick={handleToggle}>
          <div className={styles.circle}>
            {/* this is for creating a circle. */}
          </div>
        </div>
      <span className={styles.yearly}>
        Yearly
      </span>
    </div>
  );
}

export default Toggle;




