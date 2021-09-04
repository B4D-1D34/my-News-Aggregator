import styles from "./SearchInput.module.css";
import { useState, useContext } from "react";
import { NewsContext } from "../../contexts/currentNews.context";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { FetchingContext } from "../../contexts/isFetching.context";

const SearchInput = () => {
  const { query, setQuery } = useContext(NewsContext);
  const { isFetched } = useContext(FetchingContext);
  const [inputValue, setInputValue] = useState("");

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
      {!isFetched && query ? <LoadingIcon /> : ""}
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
