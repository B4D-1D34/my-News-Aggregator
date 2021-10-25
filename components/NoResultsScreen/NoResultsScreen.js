import { useContext } from "react";
import { SetQueryContext } from "../../contexts/query.context";
import styles from "./NoResultsScreen.module.css";

const NoResultsScreen = ({ didUMean }) => {
  const setQuery = useContext(SetQueryContext);

  return didUMean === "novaluesandnodidumeanoffers" ? (
    <div className={styles.noResults}>
      <h1>
        No results for your query. You can get{" "}
        <span
          onClick={() => (window.location = "/")}
          className={styles.didUMean}
        >
          home
        </span>{" "}
        or search for something else.
      </h1>
    </div>
  ) : (
    <div className={styles.noResults}>
      <h1>
        No results for your query. Did you mean{" "}
        <span
          onClick={() => (window.location = `/?q=${didUMean}`)}
          className={styles.didUMean}
        >
          {didUMean}
        </span>
        ?
      </h1>
    </div>
  );
};

export default NoResultsScreen;
