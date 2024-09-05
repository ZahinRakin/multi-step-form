import SideBar from "./SideBar.jsx";
import styles from "./YourInfo.module.css";

function YourInfo(){
  return (
    <div className={styles.container}>
      <SideBar/>
      <div>
        Personal Information.
      </div>
    </div>
  );
}

export default YourInfo