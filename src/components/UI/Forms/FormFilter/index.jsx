import Input from '../Input'
import SelectFilter from '../Select'
import s from './style.module.scss'

const FormFilter = () => {
  return (
    <form className={s.formFilter}>
      <Input placeHolder='Kitob nomini kiriting'/>
      <SelectFilter />
      <Input placeHolder=''/>
      <Input placeHolder='Kitob muallifi kiriting'/>
      <Input placeHolder=''/>
      <Input placeHolder='Manzil'/>
      <Input placeHolder=''/>
      <Input placeHolder='' />
      <Input type='submit' placeHolder=''/>
    </form>
  )
}

export default FormFilter
