import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import Head from "next/dist/shared/lib/head";
import ToPageStartArrow from "../components/toPageStartArrow/toPageStartArrow";
import MainProvider from "../contexts/main.provider";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/myfavicon.ico"></link>
      </Head>
      <MainProvider>
        <Navbar />
        <Component {...pageProps} />
        <ToPageStartArrow />
      </MainProvider>
    </>
  );
}

export default MyApp;
