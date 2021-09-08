import { useContext } from "react";
import { PredictiveNewsContext } from "../../contexts/predictiveNews.context";
import DropdownItem from "../DropdownItem/DropdownItem";
import styles from "./SearchDropdown.module.css";
// const testArray = [
//   {
//     title: "Afghan officer rescued from Kabul starts new life in U.S.",
//     date: "2021-09-07T16:59:54",
//     id: "1235123522345234523457",
//   },
//   {
//     title: "Eight bold predictions for the 2021 NFL season",
//     date: "2021-09-07T17:12:38.019",
//     id: "1235123522634874578569",
//   },
// ];

const SearchDropdown = () => {
  const predictiveNews = useContext(PredictiveNewsContext);
  return predictiveNews ? (
    <div className={styles.dropdownContainer}>
      {predictiveNews.map((item) => (
        <DropdownItem
          title={item.title}
          date={item.datePublished}
          id={item.id}
          key={item.id}
        />
      ))}
    </div>
  ) : (
    ""
  );
};

export default SearchDropdown;
