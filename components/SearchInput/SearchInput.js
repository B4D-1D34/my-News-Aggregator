import { useState, useEffect, useContext, useRef } from "react";
import styles from "./SearchInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { QueryContext, SetQueryContext } from "../../contexts/query.context";
import { SetPrequeryContext } from "../../contexts/preQuery.context";
import { SetPageNumberContext } from "../../contexts/pageNumber.context";
import { useRouter } from "next/dist/client/router";

const SearchInput = ({ className }) => {
  const inputRef = useRef();
  const { query } = useRouter();
  let initInputValue = "";
  if (Object.keys(query).length) {
    initInputValue = query.q;
  }
  const focusInput = () =>
    inputRef.current.offsetWidth < 80 && inputRef.current.focus();

  const incrementPageNumber = useContext(SetPageNumberContext);
  const queryctx = useContext(QueryContext);
  const setQuery = useContext(SetQueryContext);
  const setPrequery = useContext(SetPrequeryContext);
  const [inputValue, setInputValue] = useState(initInputValue);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    if (inputValue.trim() && inputValue.trim() !== initInputValue) {
      let currentTimer = setTimeout(() => {
        // console.log("making with id", timer);
        setPrequery(inputValue.trim());
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
    if (inputValue.trim() && inputValue.trim() !== queryctx) {
      window.location = `/?q=${inputValue.trim()}`;
      incrementPageNumber("reset");
      setQuery(inputValue);
    }
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
