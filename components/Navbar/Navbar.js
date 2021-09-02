import { useContext, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { NewsContext } from "../../contexts/news.context";
const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const { query, setQuery } = useContext(NewsContext);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setQuery(inputValue);
  };

  const handleGetBack = () => {
    setInputValue("");
    setQuery("");
  };

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <h1 className={styles.title}>My News Aggregator.</h1>
        </a>
      </Link>
      {query ? (
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
      )}
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          placeholder="Search something..."
        />
        <button onClick={handleSubmit}>Search!</button>
      </div>
    </div>
  );
};

export default Navbar;
