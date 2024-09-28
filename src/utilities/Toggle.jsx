import styles from "./Toggle.module.css";

function Toggle() {
  function handleToggle (){
    const outerElem = document.querySelector(`.${styles[`outer-border`]}`).classList;
    const circleElem = document.querySelector(`.${styles[`circle`]}`).classList;
    const monthlyElem = document.querySelector(`.${styles[`monthly`]}`);
    const yearlyElem = document.querySelector(`.${styles[`yearly`]}`);

    const arcadeElem = document.querySelector(`.arcadePrice`);
    const advancedElem = document.querySelector(`.advancedPrice`);
    const proElem = document.querySelector(`.proPrice`);

    if(outerElem.contains(styles["clicked-outer-border"])){ //monthly
      outerElem.remove(styles["clicked-outer-border"]);
      circleElem.remove(styles["clicked-circle"]);

      monthlyElem.style.color="hsl(213, 96%, 18%)";
      yearlyElem.style.color="hsl(229, 24%, 87%)";

      arcadeElem.innerHTML = `<span className="color-gray">$9/mo</span>`;
      advancedElem.innerHTML = `<span className="color-gray">$12</span>`;
      proElem.innerHTML = `<span className="color-gray">$15/mo</span>`;
    } else {                                               //yearly
      outerElem.add(styles["clicked-outer-border"]);
      circleElem.add(styles["clicked-circle"]);

      yearlyElem.style.color="hsl(213, 96%, 18%)";
      monthlyElem.style.color="hsl(229, 24%, 87%)";

      arcadeElem.innerHTML = `
        <span class="color-gray">
          $90/yr
        </span><br/>
        <span class="color-blue">
          2 months free
        </span>`;
      advancedElem.innerHTML = `
        <span class="color-gray">
          $120/yr
        </span><br/>
        <span class="color-blue">
          2 months free
        </span>`;
      proElem.innerHTML = `
        <span class="color-gray">
          $150/yr
        </span><br/>
        <span class="color-blue">
          2 months free
        </span>`;
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




