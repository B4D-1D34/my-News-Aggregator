import { NewsContext } from "../../contexts/news.context";
import { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import styles from "./PostPage.module.css";
import Head from "next/head";

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { news } = useContext(NewsContext);
  let currentPost;
  let postDate;
  if (news) {
    currentPost = news.find((post) => post.id === id);
    postDate = new Date(currentPost.datePublished);
  }

  const { image, title, description, body, url } = currentPost;

  return currentPost ? (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className={styles.head}
        style={
          image.url
            ? { backgroundImage: `url(${image.url})` }
            : { height: "unset", backgroundColor: "thistle" }
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
      <a className={styles.postLink} href={url} target="_blank">
        Source link: {url}
      </a>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default PostPage;
