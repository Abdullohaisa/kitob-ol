import Link from 'next/link'
import scr from './style.module.scss'

// icon 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PublicIcon from '@mui/icons-material/Public';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Header = () => {
  return (
    <div className={scr.header}>
     <div className="container">
       <nav>
         <img src='/images/logo.svg' alt="" />
         <ul>
         <li><Link href='favourite'><FavoriteBorderIcon/></Link></li>
         <li><Link href='favourite'><NotificationsNoneOutlinedIcon/></Link></li>
         <li><Link href='favourite'><PersonOutlineOutlinedIcon/></Link></li>
         <li><Link href='favourite'><PublicIcon/></Link></li>
         <button>E'lon berish</button>
         </ul>
         {/* res */}
          <p><MenuOutlinedIcon/></p>
         {/* res */}
       </nav> 
     </div>
    </div>
  )
}

export default Header
