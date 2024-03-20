
import s from './Input.module.scss'

const Input = ({type, placeHolder}) => {
  return (
    <input
      className={s.input}
      type={type}
      placeholder={placeHolder}
    />
      
  )
}

export default Input
