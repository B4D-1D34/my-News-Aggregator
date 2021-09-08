import styles from "./DropdownItem.module.css";
import { countTime } from "../../utils/timeCountHelper";
import Link from "next/dist/client/link";

const DropdownItem = ({ title, date, id }) => {
  const newsTime = countTime(date);
  return (
    <Link href={`/posts/${id}`}>
      <a>
        <div className={styles.dropdownItem}>
          <p>{title}</p>
          <p>{newsTime}</p>
        </div>
      </a>
    </Link>
  );
};
export default DropdownItem;
