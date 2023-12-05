import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MySwiper = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        // modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="banner"
        style={{ width: "900px", height: "400px", backgroundColor: "white" }}
        slidesOffsetAfter={0}
        slidesOffsetBefore={0}
        initialSlide={1}
        CenteredSlides={true}
        SpaceBetween={8}
        SlidesPerView={5}
        Navigation={true}
        Pagination={{ clickable: true }}
        Scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            style={{ width: "900px", height: "400px" }}
            src="
          https://cdn.gamemeca.com/data_center/274/781/20231110164041.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "900px", height: "400px" }}
            src="https://i.imgur.com/SiytCty.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "900px", height: "400px" }}
            src="https://i.imgur.com/DRNbgqf.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "900px", height: "400px" }}
            src="https://i.imgur.com/UL82Pr7.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "900px", height: "400px" }}
            src="https://i.imgur.com/fd6nQ5v.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "900px", height: "400px" }}
            src="https://i.imgur.com/AJkto1Y.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default MySwiper;
