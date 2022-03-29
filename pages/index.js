import { Box } from "@mui/material";
import AugustaBackground from "../components/augusta-background";
import Banner from "../components/banner-section";
import Brands from "../components/brands-section";
import AboutUs from "../components/about-us-section";
import Articles from "../components/articles-section";
import Products from "../components/products-section";
import Footer from "../components/footer-section";

export default function Home() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Banner />
      <Brands />

      <AugustaBackground>
        <AboutUs />
        <Articles />
      </AugustaBackground>
      <Products />
      <br/>
      <Footer />
    </Box>
  );
}
