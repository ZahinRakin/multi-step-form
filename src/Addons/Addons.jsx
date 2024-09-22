import styles from "./Addons.module.css";
import { useEffect } from "react";

function Addons(){
  useEffect(() => {
    document.querySelectorAll(".section-active")
      .forEach(elem => elem.classList.remove('section-active'));
    document.querySelector(".section-3-circle").classList.add("section-active");
  }, []);

  return(
    <div>
      add ons 
    </div>
  );
}

export default Addons