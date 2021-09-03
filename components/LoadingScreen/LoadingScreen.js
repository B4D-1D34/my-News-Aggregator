import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
