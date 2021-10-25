import Link from "next/link";
import styles from "./Navbar.module.css";
import SearchDestination from "../SearchDestination/SearchDestination";
import { useContext } from "react";
import { QueryContext, SetQueryContext } from "../../contexts/query.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import InputZone from "../InputZone/InputZone";
import { SetPageNumberContext } from "../../contexts/pageNumber.context";
const Navbar = () => {
  // console.log("navbar render");
  const setQuery = useContext(SetQueryContext);
  const query = useContext(QueryContext);
  const incrementPageNumber = useContext(SetPageNumberContext);
  const handleGetBack = () => {
    if (query) {
      incrementPageNumber("reset");
      setQuery("");
      window.location = "/";
    }
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
      <InputZone />
    </div>
  );
};

export default Navbar;
