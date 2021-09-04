import styles from "./SearchDestination.module.css";
import { useContext } from "react";
import { NewsContext } from "../../contexts/currentNews.context";
import Link from "next/link";

const SearchDestination = () => {
  const { query, setQuery } = useContext(NewsContext);

  const handleGetBack = () => {
    setQuery("");
  };

  console.log("search destination rendered");
  return query ? (
    <div className={styles.locationWrapper}>
      <Link href="/">
        <button className={styles.navbarButton} onClick={handleGetBack}>
          <div className={styles.arrow}>&lArr;</div>
          <span className={styles.buttonText}>Get back</span>
        </button>
      </Link>
      <h1 className={styles.location}>Search results for: {query}</h1>
    </div>
  ) : (
    <h1 className={styles.location}>Homepage with Trending News</h1>
  );
};
export default SearchDestination;
