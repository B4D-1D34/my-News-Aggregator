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
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <h1 className={styles.title}>My News Aggregator.</h1>
        </a>
      </Link>
      {query ? (
        <h1 className={styles.location}>Search results for: {query}</h1>
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
