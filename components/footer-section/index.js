import * as React from "react";
import Link from "next/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#000",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 10,
          pt: 4,
          pb: 4,
          color: "#fff",
          borderTop: "5px #f79633 solid",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Company
                    </Typography>

                    <Link href="">
                      <a style={{ opacity: 0.7 }}>Home</a>
                    </Link>

                    <Link href="">
                      <a style={{ opacity: 0.7 }}>About Us</a>
                    </Link>

                    <Link href="">
                      <a style={{ opacity: 0.7 }}>Articles</a>
                    </Link>

                    <Link href="">
                      <a style={{ opacity: 0.7 }}>Products</a>
                    </Link>

                    <Link href="">
                      <a style={{ opacity: 0.7 }}>Contact Us</a>
                    </Link>
                  </Box>
                </Grid>

                <Grid item xs={3}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Products
                    </Typography>

                    <Link href="">
                      <a style={{ opacity: 0.7 }}>Home</a>
                    </Link>

                    <Link href="">
                      <a style={{ opacity: 0.7 }}>About Us</a>
                    </Link>

                    <Link href="">
                      <a style={{ opacity: 0.7 }}>Articles</a>
                    </Link>

                    <Link href="">
                      <a style={{ opacity: 0.7 }}>Products</a>
                    </Link>

                    <Link href="">
                      <a style={{ opacity: 0.7 }}>Contact Us</a>
                    </Link>
                  </Box>
                </Grid>

                <Grid item xs={3}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Information
                    </Typography>

                    <Link href="">
                      <a style={{ opacity: 0.7 }}>Home</a>
                    </Link>

                    <Link href="">
                      <a style={{ opacity: 0.7 }}>About Us</a>
                    </Link>

                    <Link href="">
                      <a style={{ opacity: 0.7 }}>Articles</a>
                    </Link>

                    <Link href="">
                      <a style={{ opacity: 0.7 }}>Products</a>
                    </Link>

                    <Link href="">
                      <a style={{ opacity: 0.7 }}>Contact Us</a>
                    </Link>
                  </Box>
                </Grid>

                <Grid item xs={3}>
                  <img
                    src="logo.png"
                    alt="logo"
                    style={{
                      width: "100%",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          background: "#111",
          color: "#fff",
          fontSize: "12px",
          textAlign: "center",
          p: 2,
          borderTop: "1px #222 solid",
        }}
      >
        &copy; {new Date().getFullYear()} Augusta Tools
      </Box>
    </Box>
  );
}
