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
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log("rasm", data)

  return (
    <div className={s.root}>
    {data && Array.isArray(data) && data.length > 0 && (
      <Slider {...settings}>
        {data.map((el, i) => (
          <div key={i} className={s.slideItem}>
            
              <img className="s.img" src={el.file} alt="banner" />
          
          </div>
        ))}
      </Slider>
    )}
  </div>
  );
}

export default Banner;

{/* <img src={data?.data.images[0].file} alt="banner" /> */}