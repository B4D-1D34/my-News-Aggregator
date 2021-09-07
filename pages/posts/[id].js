import { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import styles from "./PostPage.module.css";
import Head from "next/head";
import { AllNewsContext } from "../../contexts/allNews.context";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const news = useContext(AllNewsContext);
  let currentPost;
  let postDate;
  if (news) {
    currentPost = news.find((post) => post.id === id) || {};
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
