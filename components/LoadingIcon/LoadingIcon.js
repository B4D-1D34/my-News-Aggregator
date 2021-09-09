import { useContext } from "react";
import styles from "./LoadingIcon.module.css";
import { FetchingContext } from "../../contexts/isFetching.context";

const LoadingIcon = () => {
  const isFetched = useContext(FetchingContext);
  return !isFetched ? <div className={styles.loader} /> : null;
};
export default LoadingIcon;
