import s from './style.module.scss'

// ICON
import ClearIcon from '@mui/icons-material/Clear';

const SideBar = ({bar, close}) => {
  return (
    <div className={ !bar ? s.bar : s.openBar}>
      <div>
       <ul>
       <img src='/images/logo.svg' alt="Logo" />
        <button onClick={(() => close())}><ClearIcon/></button>
       </ul>
      </div>
    </div>
  )
}

export default SideBar
