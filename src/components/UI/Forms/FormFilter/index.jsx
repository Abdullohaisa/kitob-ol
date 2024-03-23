import Inputs from '../Input'
import { SelectFilter, SelectInput, SliderFilter } from '../Select'
import s from './style.module.scss'

const FormFilter = () => {
  return (
    <form className={s.formFilter}>
      <Inputs placeHolder='Kitob nomini kiriting'/>
      <SelectFilter placeholder='Nashiryot tanlang' />
      <SelectFilter placeholder='Til' />
      <SelectInput />
      <SliderFilter/>
      <Inputs placeHolder='Manzil'/>
      <SelectFilter placeholder='Kategoriya' />
      <Inputs placeHolder='' />
      <Inputs type='submit' placeHolder=''/>
    </form>
  )
}

export default FormFilter
