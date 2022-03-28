import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const AboutUs = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ width: "100%", width: "100%", color: "#fff" }}>
            <Typography
              variant="h2"
              sx={{ color: "#f79633", fontWeight: 700, pb: 2 }}
            >
              About Us
            </Typography>

            <Typography variant="p">
              Components may have multiple widths defined, causing the layout to
              change at the defined breakpoint. Width values given to larger
              breakpoints override those given to smaller breakpoints.
            </Typography>
            <br />
            <br />
            <Typography variant="p">
              They define the number of grids the component will use for a given
              breakpoint. They are intended to control width using flex-basis in
              row containers but they will impact height in column containers.
              If used, these props may have undesirable effects on the height of
              the Grid item elements.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ width: "100%", width: "100%" }}>
            <img
              src="/about-us-image.webp"
              alt="about-us creative"
              style={{
                height: "100%",
                width: "100%",
                filter: "grayscale(100%)",
                borderRadius:'50%'
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
