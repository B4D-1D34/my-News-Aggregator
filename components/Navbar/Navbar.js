import Link from "next/link";
import styles from "./Navbar.module.css";
import SearchInput from "../SearchInput/SearchInput";
import SearchDestination from "../SearchDestination/SearchDestination";
import { useContext } from "react";
import { SetQueryContext } from "../../contexts/query.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  console.log("navbar render");
  const setQuery = useContext(SetQueryContext);
  const handleGetBack = () => {
    setQuery("");
  };

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.titleLink} onClick={handleGetBack}>
          <h1 className={styles.title}>My News Aggregator.</h1>
          <FontAwesomeIcon className={styles.homeIcon} icon={faHome} />
        </a>
      </Link>
      <SearchDestination />
      <SearchInput />
    </div>
  );
};

export default Navbar;
