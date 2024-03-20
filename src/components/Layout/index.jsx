import Footer from '@/components/UI/Footer'
import Header from '@/components/UI/Header'
import s from './style.module.scss'

export default function Layout({ children }) {
  return (
    <div className={s.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
