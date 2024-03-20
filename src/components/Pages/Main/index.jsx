import { useEffect, useState } from "react";
import s from './style.module.scss'
import BookWorkBtn from "@/components/UI/BookWork.btn/book.work.btn";
import FilterBook from "@/components/UI/Filter/FilterBook";
import ProductBox from "@/components/UI/Products/Product-Box";

const Main = () => {
  

  return (
   <div className={s.main}>
      <div className="container">
          {/* <Banner/> */}
         <BookWorkBtn/>
         <FilterBook/>
         <ProductBox/>
      </div>
   </div>
  );
};

export default Main;
