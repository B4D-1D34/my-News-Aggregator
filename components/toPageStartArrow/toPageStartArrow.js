import styles from "./toPageStartArrow.module.css";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ToPageStartArrow = () => {
  const toPageStartRef = useRef();
  const buttonAppear = () =>
    window.pageYOffset > 300
      ? (toPageStartRef.current.className = styles.toPageStart)
      : (toPageStartRef.current.className = styles.hidden);

  useEffect(() => {
    window.onscroll = buttonAppear;
  }, []);

  return (
    <a ref={toPageStartRef} className={styles.hidden} href="#">
      <FontAwesomeIcon icon={faArrowUp} />
    </a>
  );
};
export default ToPageStartArrow;
