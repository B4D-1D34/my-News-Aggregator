import styles from "../styles/Home.module.css";
import NewsCard from "../components/NewsCard/NewsCard";
import data from "../fullTestingObject";
import { NewsContext } from "../contexts/news.context";
import { useContext } from "react";

const Home = () => {
  const { isFetched, news } = useContext(NewsContext);
  const data = news;
  console.log(isFetched);
  console.log(data);
  return isFetched ? (
    <div className={styles.container}>
      {data.value.map((item) => (
        <NewsCard
          key={item.id}
          id={item.id}
          imgUrl={item.image.url}
          title={item.title}
          description={item.description.replace(new RegExp("<[^>]*>", "g"), "")}
          date={item.datePublished}
        />
      ))}
    </div>
  ) : (
    <h1>Loading</h1>
  );
};
export default Home;
