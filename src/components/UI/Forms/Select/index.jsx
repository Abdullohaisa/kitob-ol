import { useState } from 'react'
import s from './style.module.scss'

const SelectFilter = () => {

    const [book, setBook] = useState('')
    console.log(book)
  return (
    <select className={s.select}>
      <option setBook="azon">Azon</option>
      <option setBook="qamar">Qamar</option>
      <option setBook="hilol-nashr">Hiloh Nashr</option>
    </select>
  )
}

export default SelectFilter
