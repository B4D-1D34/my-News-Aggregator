import styles from "./DropdownItem.module.css";
import { useContext } from "react";
import { AllNewsContext } from "../../contexts/allNews.context";
import { countTime } from "../../utils/timeCountHelper";
import Link from "next/dist/client/link";

const DropdownItem = ({ item }) => {
  const newsTime = countTime(item.datePublished);
  const { news, setNews } = useContext(AllNewsContext);

  const addToNews = () =>
    !news.find((post) => post.id === item.id) && setNews([...news, item]);
  return (
    <Link href={`/posts/${item.id}`}>
      <a>
        <div className={styles.dropdownItem} onClick={addToNews}>
          <p>{item.title}</p>
          <p>{newsTime}</p>
        </div>
      </a>
    </Link>
  );
};
export default DropdownItem;
