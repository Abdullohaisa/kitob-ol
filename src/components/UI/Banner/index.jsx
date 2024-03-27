import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://test.kitob-ol.uz:8080/api/download/banner?image_type=work"
      );
      const jsonData = await response.json();
      setData(jsonData.data.images);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    customPaging: function (i) {
      return (
        <div
        className={s.slickDote}
          style={{
            width: "12px",
            borderRadius:"12px",
            background:"white", // O'zingizning talablarizga mos ravishda dotning hajmini o'zgartiring
            height: "12px", // O'zingizning talablarizga mos ravishda dotning hajmini o'zgartiring
            backgroundColor: "gray", // Dot rangi // Dotning kengligi
          }}
        ></div>
      );
    },
  };

  // console.log("rasm", data);

  return (
   <div className={s.mainRoot}>
     <div className={s.root}>
      {data && Array.isArray(data) && data.length > 0 && (
        <Slider className={s.slider} {...settings}>
          {data.map((el, i) => (
            <div className={s.item} key={i}>

                 
                    <p className={s.bannerTitle}>It is never late to start reading!</p>
                    <button>Ko'proq Ko'rish</button>
              
                    <img className={s.img} src={el.file} alt="Banner" />

            </div>
          ))}
        </Slider>
      )}
    </div>
   </div>
  );
}

export default Banner;

{
  /* <img src={data?.data.images[0].file} alt="banner" /> */
}
