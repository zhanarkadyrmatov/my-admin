import React from "react";
import s from "./Available.module.scss";
import Slider from "react-slick";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiArrowSortedUp } from "react-icons/ti";
import Blockslick from "../../Cards/blockslick/blockslick";
export default function Available() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.30,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div
        className={`${s.block_img_slick} dark:bg-[#212130] dark:text-[#8888]`}
      >
        <div className={s.btn_title}>
          <h3>Available Jobs For You</h3>
          <div className={s.flex_bread}>
            <button>
              Newest
              <TiArrowSortedUp className={s.icon_arrow} />
            </button>
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className={s.blocks_slick}>
          <Slider className={s.className} {...settings}>
            <Blockslick />
            <Blockslick />
            <Blockslick />
            <Blockslick />
            <Blockslick />
          </Slider>
        </div>
      </div>
    </div>
  );
}
