import styles from "./CheckBox.module.css";
import { useState, useEffect } from "react";

function CheckBox(props){
  const [checked, setChecked] = useState(false);

  function markSelected(identity){
    setChecked(c => !c);

    const inputElem = document.querySelector(`input[value="${props.id}"]`);
    const containerElem = document.querySelector(`.${identity}`).classList;
    
    inputElem.checked
      ? containerElem.add(styles.selected)
      : containerElem.remove(styles.selected);
  }

  return(
    <div className={`${styles.container} ${props.id}`}>
      <input
        type="checkbox" 
        value={props.id} 
        checked
        onChange={() => markSelected(props.id)}/>

      <div className={styles[`sub-container`]}>
        <div className={`${styles.title} color-blue`}> 
          {props.title}
        </div>
        <div className={`${styles.subtitle} color-gray`}>
          {props.subtitle}
        </div>
      </div>
      <div className={`${styles.bill}`}>
        +${props.billing === "monthly" ? props.price.monthly : props.price.yearly}
      </div>
    </div>
  );
}

export default CheckBox