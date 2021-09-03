import styles from "../styles/Home.module.css";
import NewsCard from "../components/NewsCard/NewsCard";
import data from "../fullTestingObject";
import { NewsContext } from "../contexts/news.context";
import { useContext } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const Home = () => {
  const { relatedSearch } = useContext(NewsContext);
  console.log(relatedSearch);
  return relatedSearch ? (
    <div className={styles.container}>
      {relatedSearch.map((item) => (
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
    <LoadingScreen />
  );
};
export default Home;
