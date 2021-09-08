import { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import styles from "./PostPage.module.css";
import Head from "next/head";
import { AllNewsContext } from "../../contexts/allNews.context";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { PredictiveNewsContext } from "../../contexts/predictiveNews.context";

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const predictiveNews = useContext(PredictiveNewsContext);
  const { news, setNews } = useContext(AllNewsContext);
  let currentPost;
  let postDate;
  if (news) {
    currentPost = news.find((post) => post.id === id) || {};
    if (predictiveNews && !Object.keys(currentPost).length) {
      const targetPost = predictiveNews.find((post) => post.id === id) || {};
      setNews([...news, targetPost]);
    }
    // console.log(news);
    postDate = new Date(
      currentPost.datePublished ? currentPost.datePublished : 0
    );
  }

  const { image, title, description, body, url } = currentPost;

  return Object.keys(currentPost).length ? (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className={styles.head}
        style={
          image.url
            ? { backgroundImage: `url(${image.url})` }
            : { height: "80vh", backgroundColor: "thistle" }
        }
      >
        <div className={styles.headContent}>
          <h1 className={styles.title}>{title}</h1>
          <h4 className={styles.time}>
            {postDate.toUTCString().replace(/:.. GMT/, "")}
          </h4>
          <h3 className={styles.description}>
            {description.replace(new RegExp("<[^>]*>", "g"), "")}
          </h3>
        </div>
      </div>
      <h2 className={styles.content}>{body}</h2>
      <a
        className={styles.postLink}
        href={url}
        target="_blank"
        rel="noreferrer noopener"
      >
        Source link: {url}
      </a>
    </div>
  ) : (
    <LoadingScreen />
  );
};

export default PostPage;
