import styles from "./SearchDestination.module.css";
import { useContext } from "react";
import Link from "next/link";
import { QueryContext } from "../../contexts/query.context";
import { useRouter } from "next/dist/client/router";

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
            <div className={styles.arrow}>&lArr;</div>
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
