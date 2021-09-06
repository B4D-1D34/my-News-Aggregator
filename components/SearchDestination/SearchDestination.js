import styles from "./SearchDestination.module.css";
import { useContext } from "react";
import Link from "next/link";
import { QueryContext } from "../../contexts/query.context";
import { useRouter } from "next/dist/client/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SearchDestination = () => {
  const router = useRouter();
  const { id } = router.query;
  const query = useContext(QueryContext);

  console.log("search destination rendered");
  return (
    <div className={styles.locationWrapper}>
      {id ? (
        <Link href="/">
          <button className={styles.navbarButton}>
            <FontAwesomeIcon className={styles.arrow} icon={faArrowLeft} />
          </button>
        </Link>
      ) : (
        ""
      )}

      {query ? (
        <h1 className={styles.location}>
          <span className={styles.query}>&nbsp;{query}</span>
        </h1>
      ) : (
        <h1 className={styles.homeLocation}></h1>
      )}
    </div>
  );
};
export default SearchDestination;
