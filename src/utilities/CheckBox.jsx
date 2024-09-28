import styles from "./CheckBox.module.css";

function CheckBox(props){
  function markSelected(identity){
    const containerElem = document.querySelector(`.${identity}`).classList;
    containerElem.toggle(styles.selected);
  }

  return(
    <div className={`${styles.container} ${props.id}`}>
      <input type="checkbox" value={props.id} onClick={() => markSelected(props.id)}/> {/*why should i name a input element */}
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