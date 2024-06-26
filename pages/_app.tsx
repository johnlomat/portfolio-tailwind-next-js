import type { AppProps } from "next/app";
import { Raleway, Open_Sans, Montserrat } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

config.autoAddCss = false;

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`page-container ${raleway.variable} ${montserrat.variable} ${open_sans.variable}`}
    >
      <Header />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
