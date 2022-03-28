import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function ArticleCard() {
  return (
    <Box
      sx={{
        height: "300px",
        width: "100%",
        background: "#d3802c",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "100px",
          width: "100%",
        }}
      >
        <img
          src={"http://www.augustatools.co.za/img/1.jpg"}
          alt=""
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          p: 2,
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          Different Types of Drill Bits
        </Typography>

        <Typography paragraph>
          {`When it comes to a broad application such as drilling, or the diverse
          use of drilling equipment, it is essential that you utilise the best
          tools and supplies available. Using the wr`}
        </Typography>
      </Box>
    </Box>
  );
}
