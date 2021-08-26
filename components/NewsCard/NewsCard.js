import styles from "./NewsCard.module.css";
import Link from "next/link";
const NewsCard = ({ imgUrl, title, description, date, id }) => {
  const cardDate = new Date(date);
  const timePassed = (Date.now() - cardDate) / (24 * 60 * 60000);
  const newsTime =
    timePassed > 1
      ? Math.floor(timePassed) + `d`
      : Math.floor(timePassed * 24) + `h`;
  return (
    <div className={styles.newsCard}>
      <div className={styles.head}>
        <img className={styles.postImage} src={imgUrl} />
        <Link href={`/posts/${id}`}>
          <a>
            <h3>{title}</h3>
          </a>
        </Link>
      </div>
      <p>{description}</p>
      <h4>{newsTime}</h4>
    </div>
  );
};

export default NewsCard;
