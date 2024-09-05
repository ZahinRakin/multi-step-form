import styles from "./SelectPlan.module.css";
import SideBar from "../SideBar/SideBar.jsx";

function SelectPlan(){
  return(
    <div className="container">
      <SideBar/>
      <div>
        select your plan
      </div>
    </div>
  );
}

export default SelectPlan