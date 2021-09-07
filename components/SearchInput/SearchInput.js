import styles from "./SearchInput.module.css";
import { useState, useContext } from "react";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { FetchingContext } from "../../contexts/isFetching.context";
import { SetQueryContext } from "../../contexts/query.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
  const setQuery = useContext(SetQueryContext);
  const isFetched = useContext(FetchingContext);
  const [inputValue, setInputValue] = useState("");

  // console.log("search input rend");

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
      ></FontAwesomeIcon>
    </div>
  );
};
export default SearchInput;
