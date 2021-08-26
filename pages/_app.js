import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import { NewsProvider } from "../contexts/news.context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <NewsProvider>
        <Component {...pageProps} />
      </NewsProvider>
    </>
  );
}

export default MyApp;
