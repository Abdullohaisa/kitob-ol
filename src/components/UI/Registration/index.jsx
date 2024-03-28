import React from 'react'
import s from './style.module.scss'
import Link from 'next/link';
// icon
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const Register = () => {
  return (
   <div className="container">
     <div className={s.register}>
      <ul>
        <li className={s.registerPage}><Link href='/'><HomeRoundedIcon className={s.icon}/></Link>| <span> E'lon berish</span></li>
         <li><p>Ro'yxatdan o'tish</p></li>
      </ul>

       <form className={s.form}>
        <div >
            <label>
            Brend nomini kiriting
              <input type="text" />
            </label>
            <label>
            Email manzilingizni kiriting
              <input type="text" />
            </label>
            <label>
            Telefon raqam*
              <input type="number" />
            </label>
            <label>
            Qo'shimcha telefon raqam
              <input type="number" />
            </label>
            <label>
            Manzilni tanlang
              <input type="text" />
            </label>
            <label>
            Qo’shimcha manzilni kiriting
              <input type="text" />
            </label>
            <label>
            Log in
              <input type="text" />
            </label>
            <label>
            Parol
              <input type="text" />
            </label>
            <label>
            Parolni tasdiqlash
              <input type="text" />
            </label>
            <div>
            <button>Ro'yxatdan o'tish</button>
            </div>
        </div>
        <div className={s.userProfile}><PersonOutlineOutlinedIcon className={s.userIcon}/></div>
       </form>
    </div>
   </div>
  )
}

export default Register
