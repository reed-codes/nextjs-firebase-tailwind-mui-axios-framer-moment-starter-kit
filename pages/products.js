import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography, Button, IconButton } from "@mui/material";
import Product from "../components/products-section/product";
import ViewComfySharpIcon from "@mui/icons-material/ViewComfySharp";
import Pagination from '@mui/material/Pagination';

export default function Products() {
  const [gridCols, setGridCols] = useState(4);
  const DUMMY_STRING = "WHO_ELSE_BUT_REEDEMER";

  const handleSetLayout = (cols) => {
    if (cols === 3) setGridCols(3);
    else setGridCols(4);
  };

  return (
    <Box
      sx={{
        background: "#fff",
        pt: "80px",
        pb: 4,
      }}
    >
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                width: "100%",
                height: 40,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "7px",
                  fontSize: "14px",
                  alignItems: "center",
                }}
              >
                <Typography variant="p">Displaying</Typography>

                <Typography variant="b" sx={{ fontWeight: "bold" }}>
                  1 - 10 of 183
                </Typography>

                <Typography variant="p">products</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: "7px",
                  fontSize: "14px",
                  alignItems: "center",
                }}
              >
                <Typography variant="p">Layout</Typography>

                <IconButton
                  onClick={() => handleSetLayout(3)}
                  sx={{
                    background: gridCols === 3 ? "rgba(0,0,0,.8)" : "auto",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill={gridCols === 3 ? "#f79633" : "#111"}
                    className="bi bi-grid-3x2-gap-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9z" />
                  </svg>
                </IconButton>

                <IconButton
                  onClick={() => handleSetLayout(4)}
                  sx={{
                    background: gridCols === 4 ? "rgba(0,0,0,.8)" : "auto",
                  }}
                >
                  <ViewComfySharpIcon
                    sx={{
                      color: gridCols === 4 ? "#f79633" : "#111",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ height: "100%", width: "100%", color: "#fff" }}>
              <Box sx={{ width: "100%" }}>
                <Grid container spacing={2}>
                  {DUMMY_STRING.split("").map((_, index) => {
                    return (
                      <Grid item key={"item-" + index} xs={gridCols === 3 ? 4 : 3}>
                        <Product />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx = {{
          p:2,
          width:'100%',
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
      }}>
   <Pagination count={10} />
      </Box>
    </Box>
  );
}
