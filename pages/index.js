import styles from "../styles/Home.module.css";
import NewsCard from "../components/NewsCard/NewsCard";
import { NewsContext } from "../contexts/currentNews.context";
import { useContext, useEffect, useRef, useState } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import { SetPageNumberContext } from "../contexts/pageNumber.context";
import NoResultsScreen from "../components/NoResultsScreen/NoResultsScreen";

const Home = () => {
  const relatedSearch = useContext(NewsContext);
  //last post id to avoid unnecessary api fetches
  const [lastPostId, setLastPostId] = useState(0);
  const incrementPageNumber = useContext(SetPageNumberContext);

  const newsContainer = useRef();
  const loadMoreNews = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        incrementPageNumber();
        observer.disconnect();
      }
    });
  };

  useEffect(() => {
    if (relatedSearch.value.length) {
      if (
        relatedSearch.value[relatedSearch.value.length - 1].id !== lastPostId
      ) {
        const observer = new IntersectionObserver(loadMoreNews, {
          threshold: 0,
        });
        observer.observe(newsContainer.current.lastChild);
        setLastPostId(relatedSearch.value[relatedSearch.value.length - 1].id);
      }
    }
  }, [relatedSearch]);

  return relatedSearch.value.length ? (
    <div ref={newsContainer} className={styles.container}>
      {relatedSearch.value.map((item) => (
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
  ) : relatedSearch.didUMean ? (
    <NoResultsScreen didUMean={relatedSearch.didUMean} />
  ) : (
    <LoadingScreen />
  );
};
export default Home;
