import { useContext } from "react";
import { PredictiveNewsContext } from "../../contexts/predictiveNews.context";
import DropdownItem from "../DropdownItem/DropdownItem";
import styles from "./SearchDropdown.module.css";

const SearchDropdown = () => {
  const predictiveNews = useContext(PredictiveNewsContext);
  return predictiveNews ? (
    <div className={styles.dropdownContainer}>
      {predictiveNews.map((item) => (
        <DropdownItem key={item.id} item={item} />
      ))}
    </div>
  ) : null;
};

export default SearchDropdown;
