import styles from "./toPageStartArrow.module.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

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
      <FontAwesomeIcon icon={faArrowUp} />
    </a>
  );
};
export default ToPageStartArrow;
