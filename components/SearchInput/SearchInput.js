import styles from "./SearchInput.module.css";
import { useState, useContext } from "react";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { FetchingContext } from "../../contexts/isFetching.context";
import { SetQueryContext } from "../../contexts/query.context";

const SearchInput = () => {
  const setQuery = useContext(SetQueryContext);
  const isFetched = useContext(FetchingContext);
  const [inputValue, setInputValue] = useState("");

  console.log("search input rend");

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
        onChange={handleChange}
        onKeyDown={handleSubmitWithEnter}
        value={inputValue}
        placeholder="Search something..."
      />
      <button onClick={handleSubmit}>Search!</button>
    </div>
  );
};
export default SearchInput;
