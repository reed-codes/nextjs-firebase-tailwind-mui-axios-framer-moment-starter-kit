import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Nav from "../components/nav";
import Footer from "../components/footer-section";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Nav />
        <Component {...pageProps} />
        <Footer/>
    </>
  );
}

export default MyApp;
