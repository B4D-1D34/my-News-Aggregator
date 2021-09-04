import Link from "next/link";
import styles from "./Navbar.module.css";
import SearchInput from "../SearchInput/SearchInput";
import SearchDestination from "../SearchDestination/SearchDestination";
const Navbar = () => {
  console.log("navbar render");

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <h1 className={styles.title}>My News Aggregator.</h1>
        </a>
      </Link>
      <SearchDestination />
      <SearchInput />
    </div>
  );
};

export default Navbar;
