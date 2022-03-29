import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography, Button } from "@mui/material";
import Product from "./product";

export default function Products() {
  return (
    <Box
      sx={{
        background: "#fff",
      }}
    >
      <Box sx = {{
         background:'#000',
         mb:2
      }}>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pt: 1,
            background:'#000',
            borderTop:'5px #f79633 solid'
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#f79633", fontWeight: 700, pb: 2 }}
          >
            Products
          </Typography>

          <Button
            sx={{ background: "#f79633", color: "#333", fontWeight: 700 }}
          >
            More products
          </Button>
        </Box>
      </Container>
      </Box>

      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ height: "100%", width: "100%", color: "#fff" }}>
              <Box sx={{ width: "100%" }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Product />
                  </Grid>
                  <Grid item xs={4}>
                    <Product />
                  </Grid>
                  <Grid item xs={4}>
                    <Product />
                  </Grid>
                  <Grid item xs={4}>
                    <Product />
                  </Grid>
                  <Grid item xs={4}>
                    <Product />
                  </Grid>
                  <Grid item xs={4}>
                    <Product />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
