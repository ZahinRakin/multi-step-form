import styles from "./YourInfo.module.css";
import SideBar from "../SideBar/SideBar.jsx";

function YourInfo(){
  return (
    <div className="container">
      <SideBar/>
      <div>
        Personal Information.
      </div>
    </div>
  );
}

export default YourInfo