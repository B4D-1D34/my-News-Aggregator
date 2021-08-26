import styles from "../styles/Home.module.css";
import NewsCard from "../components/NewsCard/NewsCard";
import data from "../fullTestingObject";
import { NewsContext } from "../contexts/news.context";
import { useContext } from "react";

// export const getServerSideProps = async () => {
//   const data = await fetch(
//     "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=1&pageSize=10&withThumbnails=false&location=us",
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
//         "x-rapidapi-key": "4bb33fe4a3msh9a44028b9da3739p19c6b6jsnaaf9f21dbad5",
//       },
//     }
//   ).then((response) => response.json());
//   return { props: { data } };
// };

const Home = () => {
  const data = useContext(NewsContext);

  console.log(data);
  // const items = data.value;
  // console.log(`items`, items);
  return data ? (
    <div className={styles.container}>
      {data.value.map((item) => (
        <NewsCard
          key={item.id}
          id={item.id}
          imgUrl={item.image.url}
          title={item.title}
          description={item.snippet}
          date={item.datePublished}
        />
      ))}
    </div>
  ) : (
    <h1>Loading</h1>
  );
};
export default Home;
