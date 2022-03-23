import { Box, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";

const AugustaBackground = ({ children }) => {
  return (
    <Box
      sx={{
        height: "1000px",
        background: "100%",
        background: "#1c1d1f",
        backgroundSize: "cover",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        pt:"70px",
        pb:"70px"
      }}
    >
      <img
        src="./augusta-background-image.webp"
        alt="background-creative"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 0.1,
        }}
      />

      <AnimatedText />

      {children}
    </Box>
  );
};

const AnimatedText = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          minHeight: "60px",
          transform: "rotateZ(-90deg)",
          height: "100%",
          width: "100%",
          fontSize: "100px",
        }}
      >
        <Marquee speed={15} gradient={false}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "250px",
              fontWeight: "900",
              color: "rgba(225,225,225,.025)",
            }}
          >
            Augusta
          </Typography>
        </Marquee>

        <Marquee speed={15} gradient={false} delay={2}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "250px",
              fontWeight: "900",
              color: "rgba(225,225,225,.025)",
            }}
          >
            Tools
          </Typography>
        </Marquee>
      </Box>
    </Box>
  );
};

export default AugustaBackground;
