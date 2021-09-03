import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import { NewsProvider } from "../contexts/news.context";
import ToPageStartArrow from "../components/toPageStartArrow/toPageStartArrow";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NewsProvider>
        <Navbar />
        <Component {...pageProps} />
        <ToPageStartArrow />
      </NewsProvider>
    </>
  );
}

export default MyApp;
