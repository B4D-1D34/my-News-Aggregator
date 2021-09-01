import styles from "./NewsCard.module.css";
import Image from "next/image";
import Link from "next/link";
import image from "../../public/logopicmock.png";

const NewsCard = ({ imgUrl, title, description, date, id }) => {
  const cardDate = new Date(date);
  const timePassed = (Date.now() - cardDate) / (24 * 60 * 60000);
  const newsTime =
    timePassed > 1
      ? Math.floor(timePassed) + `d`
      : Math.floor(timePassed * 24) + `h`;
  return (
    <Link href={`/posts/${id}`}>
      <a>
        <div className={styles.newsCard}>
          {imgUrl ? (
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${imgUrl.replace(
                  "https://https://",
                  "https://"
                )})`,
              }}
            />
          ) : (
            <Image
              className={styles.image}
              src={image}
              layout="fill"
              objectFit="cover"
              objectPosition="left"
              alt="post picture"
            ></Image>
          )}
          <div className={styles.overlay}>
            <h3 className={styles.title}>{title}</h3>
            <p
              className={styles.text}
              //   dangerouslySetInnerHTML={{ __html: description }}
            >
              {description}
            </p>
          </div>
          <h4 className={styles.date}>{newsTime} ago</h4>
        </div>
      </a>
    </Link>
  );
};

export default NewsCard;
