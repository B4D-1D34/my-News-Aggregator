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

  const scrollToTop = () => window.scroll(0, 0);

  return (
    <a ref={toPageStartRef} className={styles.hidden} onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </a>
  );
};
export default ToPageStartArrow;
