import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import { NewsProvider } from "../contexts/currentNews.context";
import { FetchingProvider } from "../contexts/isFetching.context";
import { AllNewsProvider } from "../contexts/allNews.context";
import ToPageStartArrow from "../components/toPageStartArrow/toPageStartArrow";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NewsProvider>
        <FetchingProvider>
          <AllNewsProvider>
            <Navbar />
            <Component {...pageProps} />
            <ToPageStartArrow />
          </AllNewsProvider>
        </FetchingProvider>
      </NewsProvider>
    </>
  );
}

export default MyApp;
