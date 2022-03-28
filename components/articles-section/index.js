import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ArticleCard from "../article-card";
import { Typography, Button } from "@mui/material";

const articles = [
  {
    title: "Different Types of Drill Bits",
    preview:
      "When it comes to a broad application such as drilling, or the diverse use of drilling equipment, it is essential that you utilise the best tools and supplies available. Using the wrong drill bit or an inferior quality product can have detrimental effects on the task or project you are working on. Not only will the work be affected, but you may also endanger the lives of others, particularly if it is a construction or engineering project. This piece will focus on some of the different drill bits you can utilise, and how they are best used.",
    poster: "http://www.augustatools.co.za/img/1.jpg",
  },
  {
    title: "Maintaining Blades and Drilling Equipment",
    preview:
      "Purchasing and maintaining high quality wood cutting blades and drilling equipment is by no means a trivial task. Aside from sourcing your tools from a high-quality, reputable service provider, you also need to adopt a cleaning and maintenance regimen that maximises the lifespan of your tools. In addition to allowing your tools and equipment to last longer, proper care will also improve their effectiveness. This means you will be able to consistently perform your cutting and drilling activities with your usual high standards of workmanship and without having to prematurely replace or repair tools and accessories.",
    poster: "http://www.augustatools.co.za/img/2.jpg",
  },
  {
    title: "Hose Fittings for your Garden",
    preview:
      "Irrigating your garden does not have to be a nightmare and long gone are the days where you have to stand for hours in the sun and water your pants with a hose by hand. Fortunately, there are a several ways in which you can simplify your gardens irrigation. This can be achieved either by installing an irrigation system of by relying on the many hose fittings and sprinkler systems available on the market these days.",
    poster: "http://www.augustatools.co.za/img/3.jpg",
  },
  {
    title: "Air Tools",
    preview:
      "If you are looking for reliable hardware products for your next DIY project, look no further than air tools. Air tools are also known as pneumatic tools and differ from other hand tools in that they do not require any electricity to operate. Air tools are connected to a cylinder of compressed gas, which is used to power it. The gas commonly used to power air tools is carbon dioxide and it sold in portable cylinders - making air tools extremely convenient for home use.",
    poster: "http://www.augustatools.co.za/img/4.jpg",
  },
];

export default function Articles() {
  return (
    <Container
      maxWidth="md"
      sx={{
        position: "relative",
        zIndex: 10,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ height: "100%", width: "100%", color: "#fff" }}>
            <Typography
              variant="h2"
              sx={{ color: "#f79633", fontWeight: 700, pb: 2 }}
            >
              Articles
            </Typography>

            <Box sx={{ width: "100%" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
                      background: "rgba(0,0,0,.3)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "10px",
                      p: 3,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                    }}
                  >
                    <Typography variant="h3">
                      {" "}
                      An overview of what's new.
                    </Typography>
                  </Box>
                </Grid>

                {articles.map((article, index) => (
                  <Grid item xs={4}>
                    <Box key={index} sx={{ width: "100%", height: "100%" }}>
                      <ArticleCard article={article} />
                    </Box>
                  </Grid>
                ))}

                <Grid item xs={4}>
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
                      background: "rgba(0,0,0,.3)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                    }}
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ color: "#fff", borderColor: "#fff" }}
                    >
                      view more
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
