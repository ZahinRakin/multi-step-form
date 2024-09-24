import styles from "./Toggle.module.css";

function Toggle(){
  return(
    <div className={`${styles["outer-border"]}`}>
      <div className={`${styles[`circle`]} `}>
        {/*this is for creating a circle.*/}
      </div>
    </div>
  );
}

export default Toggle