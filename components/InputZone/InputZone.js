import styles from "./InputZone.module.css";
import { useRef } from "react";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

import SearchDropdown from "../SearchDropdown/SearchDropdown";
import SearchInput from "../SearchInput/SearchInput";

const InputZone = () => {
  const searchDropdownRef = useRef();

  const showDropdown = () =>
    searchDropdownRef.current.classList.add(styles.dropdownActive);

  const hideDropdown = () =>
    searchDropdownRef.current.classList.remove(styles.dropdownActive);

  // console.log("search input rend");

  return (
    <div
      className={styles.inputZone}
      onMouseOver={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <LoadingIcon />
      <SearchInput className={styles.searchInput} />
      <div
        className={styles.searchDropdown}
        ref={searchDropdownRef}
        onClick={hideDropdown}
      >
        <SearchDropdown />
      </div>
    </div>
  );
};
export default InputZone;
