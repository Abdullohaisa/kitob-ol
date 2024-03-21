import Product from "../Product";
import s from "./style.module.scss";

// icon 
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const ProductBox = () => {
  return (
    <>
      <div className={s.productBox}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className={s.productBoxBtn}>
        <button><ArrowLeftIcon className={s.icon}/></button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button><MoreHorizIcon/></button>
        <button><ArrowRightIcon className={s.icon}/></button>
      </div>
    </>
  );
};

export default ProductBox;
