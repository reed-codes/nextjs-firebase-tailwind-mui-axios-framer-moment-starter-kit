import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Nav from "../components/nav";
import { StyledEngineProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Nav />
        <Component {...pageProps} />
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
