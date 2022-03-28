import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArticleCard from "../article-card";

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

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
                      height: "300px",
                      width: "100%",
                      background: "rgba(0,0,0,.3)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "10px",
                      p: 3,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow:'hidden'
                    }}
                  >
                    <Typography variant="h4">
                      {" "}
                      An overview of whats's new.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={4}>
                      <ArticleCard/>
                </Grid>
                <Grid item xs={4}>
                      <ArticleCard/>
                </Grid>
                <Grid item xs={4}>
                      <ArticleCard/>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
