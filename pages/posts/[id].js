import { NewsContext } from "../../contexts/news.context";
import { useContext } from "react";
import { useRouter } from "next/dist/client/router";

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const news = useContext(NewsContext);
  let currentPost;
  if (news) {
    currentPost = news.value.find((post) => post.id === id);
  }

  return currentPost ? (
    <div>
      <h1>{currentPost.title}</h1>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default PostPage;
