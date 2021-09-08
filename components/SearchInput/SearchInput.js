import styles from "./SearchInput.module.css";
import { useState, useContext, useEffect } from "react";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { FetchingContext } from "../../contexts/isFetching.context";
import { SetQueryContext } from "../../contexts/query.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchDropdown from "../SearchDropdown/SearchDropdown";
import { SetPrequeryContext } from "../../contexts/preQuery.context";

const SearchInput = () => {
  const setQuery = useContext(SetQueryContext);
  const setPrequery = useContext(SetPrequeryContext);
  const isFetched = useContext(FetchingContext);
  const [inputValue, setInputValue] = useState("");
  const [timer, setTimer] = useState(null);

  // console.log("search input rend");
  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    if (inputValue) {
      let currentTimer = setTimeout(() => {
        // console.log("making with id", timer);
        setPrequery(inputValue);
        // console.log("predictive fetch!");
      }, 1000);
      setTimer(currentTimer);
    }
  }, [inputValue, setPrequery]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setQuery(inputValue);
  };

  const handleSubmitWithEnter = ({ keyCode }) => {
    if (keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className={styles.inputZone}>
      {!isFetched && inputValue ? <LoadingIcon /> : ""}
      <input
        type="text"
        className={styles.searchInput}
        onChange={handleChange}
        onKeyDown={handleSubmitWithEnter}
        value={inputValue}
        placeholder="Search something..."
      />
      <FontAwesomeIcon
        icon={faSearch}
        className={styles.searchButton}
        onClick={handleSubmit}
      />
      <div className={styles.searchDropdown}>
        <SearchDropdown />
      </div>
    </div>
  );
};
export default SearchInput;
