import { useState, useEffect, useContext, useRef } from "react";
import styles from "./SearchInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SetQueryContext } from "../../contexts/query.context";
import { SetPrequeryContext } from "../../contexts/preQuery.context";

const SearchInput = ({ className }) => {
  const inputRef = useRef();

  const focusInput = () =>
    inputRef.current.offsetWidth < 80 && inputRef.current.focus();

  const setQuery = useContext(SetQueryContext);
  const setPrequery = useContext(SetPrequeryContext);
  const [inputValue, setInputValue] = useState("");
  const [timer, setTimer] = useState(null);

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
    if (timer) {
      clearTimeout(timer);
    }
    setQuery(inputValue);
  };
  const handleSubmitWithEnter = ({ keyCode }) => {
    if (keyCode === 13) {
      handleSubmit();
    }
  };
  return (
    <div className={styles.searchInputWrapper} onClick={focusInput}>
      <input
        ref={inputRef}
        type="text"
        className={className}
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
    </div>
  );
};
export default SearchInput;
