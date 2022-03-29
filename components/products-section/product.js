import React from "react";
import { Box, Typography } from "@mui/material";

const Product = () => {
  return (
    <Box
      sx={{
        background: "#fff",
        width: "100%",
      }}
    >
      <Box
        sx={{
          height: "250px",
          width: "100%",
          p: 2,
          background:'#111',
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
          overflow:'hidden'
        }}
      >
        <img
          src="https://www.pngkey.com/png/full/127-1271382_convenient-drilling-with-best-cordless-drill-battery-operated.png"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            objectPosition: "center",
            pointerEvents: "none",
          }}
          alt="product"
        />
      </Box>
      <Box
        sx={{
          p: 2,
          boxShadow: 2,
        }}
      >
        <Typography variant="h5" color="#333">
          Drill Hammer v14
        </Typography>
        <Typography variant="p" color="#333">
          R5000
        </Typography>
      </Box>
    </Box>
  );
};

export default Product;
