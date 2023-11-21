import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/swiper-bundle.css";

export default function BrandBar() {
  return (
    <section className="brandbar">
      <div className="brandbar-content section">
        <Swiper
          direction="horizontal"
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            768: {
              width: 768,
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <img src="./src/assets/BrandAOC.png" alt="Logo Aoc" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./src/assets/BrandClearBrazil.png" alt="Logo Clear" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./src/assets/BrandGamerscard.png" alt="Logo Gamerscard" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./src/assets/BrandHyperX.png" alt="Logo HyperX" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./src/assets/BrandLegion.png" alt="Logo Legion" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./src/assets/BrandNike.png" alt="Logo Nike" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./src/assets/BrandRivalry.png" alt="Logo Rivalry" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
