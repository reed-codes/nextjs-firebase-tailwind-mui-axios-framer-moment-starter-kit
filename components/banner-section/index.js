import React from "react";
import { Box } from "@mui/material";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper style
import "swiper/css";

const Banner = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        background:'gold'
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        autoplay={true}
        loop={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Box
            sx={{
              height: "100vh",
              width: "100%",
              background: "#222",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "flex-end",
              fontSize: "40px",
              color: "#fff",
            }}
          >
            SLIDE 1
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              height: "100vh",
              width: "100%",
              background: "#444",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "flex-end",
              fontSize: "40px",
              color: "#fff",
            }}
          >
            SLIDE 2
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              height: "100vh",
              width: "100%",
              background: "#666",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "flex-end",
              fontSize: "40px",
              color: "#fff",
            }}
          >
            SLIDE 3
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Banner;
