import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import ToPageStartArrow from "../components/toPageStartArrow/toPageStartArrow";
import MainProvider from "../contexts/main.provider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainProvider>
        <Navbar />
        <Component {...pageProps} />
        <ToPageStartArrow />
      </MainProvider>
    </>
  );
}

export default MyApp;
