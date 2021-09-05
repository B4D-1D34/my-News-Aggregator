import Link from "next/link";
import styles from "./Navbar.module.css";
import SearchInput from "../SearchInput/SearchInput";
import SearchDestination from "../SearchDestination/SearchDestination";
import { useContext } from "react";
import { SetQueryContext } from "../../contexts/query.context";
const Navbar = () => {
  console.log("navbar render");
  const setQuery = useContext(SetQueryContext);
  const handleGetBack = () => {
    setQuery("");
  };

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a onClick={handleGetBack}>
          <h1 className={styles.title}>My News Aggregator.</h1>
        </a>
      </Link>
      <SearchDestination />
      <SearchInput />
    </div>
  );
};

export default Navbar;
