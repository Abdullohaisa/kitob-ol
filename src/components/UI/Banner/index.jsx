import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
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
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={style.banner}>
      <div className={style.title}>
        <h1>It is never late to start reading!</h1>
        <button>See more</button>
      </div>
      <div className={style.image}>
        <img src={data?.data.images[0].file} alt="banner" />
      </div>
    </div>
  );
}

export default Banner;
