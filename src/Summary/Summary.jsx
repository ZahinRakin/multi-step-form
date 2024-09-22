import styles from "./Summary.module.css";
import { Link } from "react-router-dom";
import { useEffect } from 'react';

function Summary(){
  useEffect(()=>{
    document.querySelectorAll('.section-active')
      .forEach(elem => {
        elem.classList.remove('section-active');
      });
    document.querySelector(".section-4-circle")
      .classList.add("section-active");
  }, []);

  return(
    <div>
      Summary
    </div>
  );
}

export default Summary