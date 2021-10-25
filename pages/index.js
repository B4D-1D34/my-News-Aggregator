import styles from "../styles/Home.module.css";
import NewsCard from "../components/NewsCard/NewsCard";
import { NewsContext } from "../contexts/currentNews.context";
import { useContext, useEffect, useRef, useState } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import { SetPageNumberContext } from "../contexts/pageNumber.context";
import NoResultsScreen from "../components/NoResultsScreen/NoResultsScreen";
import axios from "axios";
import { SetQueryContext } from "../contexts/query.context";
import { specificOptions, trendingOptions } from "../contexts/apiRequests";

export async function getServerSideProps(context) {
  const { req, query } = context;
  // console.log(query);
  const isFirstServerCall = req?.url?.indexOf("/_next/data/") === -1;
  if (isFirstServerCall) {
    const { API_KEY } = process.env;
    let options;
    if (Object.keys(query).length) {
      options = specificOptions(query.q, "20", "1");
      options.headers["x-rapidapi-key"] = API_KEY;
    } else {
      options = trendingOptions("1");
      options.headers["x-rapidapi-key"] = API_KEY;
    }
    // console.log(query);
    const { data } = await axios.request(options);
    return { props: { data, query } };
  } else {
    const data = {};
    return { props: { data } };
  }
}

const Home = ({ data, query }) => {
  const { relatedSearch, setRelatedSearch } = useContext(NewsContext);
  const setQuery = useContext(SetQueryContext);
  // const relatedSearch = data;
  useEffect(() => {
    if (Object.keys(data).length) {
      // console.log(data);
      if (!data.value.length && !data.didUMean) {
        setRelatedSearch({ ...data, didUMean: "novaluesandnodidumeanoffers" });
      } else {
        setRelatedSearch(data);
      }
      setQuery(query.q);
    }
  }, []);

  //last post id to avoid unnecessary api fetches
  const [lastPostId, setLastPostId] = useState(0);
  const incrementPageNumber = useContext(SetPageNumberContext);

  const newsContainer = useRef();
  const loadMoreNews = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (relatedSearch.value.length < relatedSearch.totalCount) {
          incrementPageNumber();
        }
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
