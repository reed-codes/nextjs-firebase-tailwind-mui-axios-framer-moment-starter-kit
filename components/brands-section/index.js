import React from "react";
import { Box } from "@mui/material";

const Brands = () => {
  return (
    <Box
      sx={{
        height: "90px",
        width: "100%",
        display: "flex",
        gap: 3,
        justifyContent: "center",
        pt: 2,
        pb: 2,
      }}
    >
      <img
        src="/brands/brand-1.png"
        alt="brand"
        sx={{
          height: "100%",
        }}
      />
      <img
        src="/brands/brand-2.png"
        alt="brand"
        sx={{
          height: "100%",
        }}
      />
      <img
        src="/brands/brand-3.jpeg"
        alt="brand"
        sx={{
          height: "100%",
        }}
      />
      <img
        src="/brands/brand-4.jpeg"
        alt="brand"
        sx={{
          height: "100%",
        }}
      />
      <img
        src="/brands/brand-5.jpeg"
        alt="brand"
        sx={{
          height: "100%",
        }}
      />
    </Box>
  );
};

export default Brands;
