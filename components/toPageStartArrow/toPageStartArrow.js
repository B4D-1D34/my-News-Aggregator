import styles from "./toPageStartArrow.module.css";
import { useEffect } from "react";

const ToPageStartArrow = () => {
  const buttonAppear = () => {
    const toTopButton = document.getElementById("toPageStart");
    if (window.pageYOffset > 300) {
      toTopButton.className = styles.toPageStart;
    } else {
      toTopButton.className = styles.hidden;
    }
  };
  useEffect(() => {
    window.onscroll = buttonAppear;
  }, []);

  return (
    <a id="toPageStart" className={styles.hidden} href="#">
      &uArr;
    </a>
  );
};
export default ToPageStartArrow;
