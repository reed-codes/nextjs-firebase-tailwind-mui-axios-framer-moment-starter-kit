import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Parallax } from "react-parallax";

export default function ArticleCard(props) {
  const txt =
    props.article.preview.length > 80
      ? props.article.preview.substring(0, 80) + "..."
      : props.article.preview;

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        background: "#d3802c",
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "130px",
          minHeight: "130px",
          width: "100%",
          background: "#000",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Parallax
          style={{
            height: "100%",
            width: "150%",
            transform: "rotateZ(30deg)",
          }}
          bgImageStyle={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
          bgStyle={{
            height: "100%",
            width: "100%",
          }}
          bgImage={props.article.poster}
          bgImageAlt="the cat"
          strength={50}
        ></Parallax>
      </Box>

      <Box
        sx={{
          width: "100%",
          p: 2,
          height: "100%",
          border: "1px goldenrod solid",
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between'
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          {props.article.title}
        </Typography>

        <Typography paragraph sx={{ fontSize: "15px", opacity: 0.8 }}>
          {txt}
        </Typography>

        <Typography paragraph>
          <Button
            size="small"
            sx={{ color: "#fff", borderColor: "#fff", fontSize:"10px" }}
          >
            Read more
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}
