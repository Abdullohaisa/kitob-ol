import { useState } from 'react';
import Inputs from '../Input'
import { SelectFilter, SelectInput, SliderFilter, SliderInput } from '../Select'
import s from './style.module.scss'

const FormFilter = () => {
  const [price, setPrice] = useState([0, 1000000]);
  console.log(price)
  return (
    <form className={s.formFilter}>
      <Inputs placeHolder='Kitob nomini kiriting'/>
      <SelectFilter placeholder='Nashiryot tanlang' />
      <SelectFilter placeholder='Til' />
      <SelectInput />
      <SliderFilter price={price} setPrice={setPrice}/>
      <Inputs placeHolder='Manzil'/>
      <SelectFilter  placeholder='Kategoriya' />
      <SliderInput price={price} setPrice={setPrice} />
      <button className={s.btn}>Qidirish</button>
    </form>
  )
}

export default FormFilter
