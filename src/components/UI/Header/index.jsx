import Link from 'next/link'
import scr from './style.module.scss'

// icon 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Header = () => {
  return (
    <div className={scr.header}>
     <div className="container">
       <nav>
         <img src='/images/logo.svg' alt="" />
         <ul>
         <li><Link href='favourite'><FavoriteBorderIcon/></Link></li>
         <li><Link href='favourite'><FavoriteBorderIcon/></Link></li>
         <li><Link href='favourite'><FavoriteBorderIcon/></Link></li>
         <li><Link href='favourite'><FavoriteBorderIcon/></Link></li>
         <button>E'lon berish</button>
         </ul>
       </nav> 
     </div>
    </div>
  )
}

export default Header
