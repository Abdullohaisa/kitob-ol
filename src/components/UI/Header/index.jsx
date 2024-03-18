import { Container } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './style.module.scss'

export default function Header() {
  const router = useRouter()
  const { t } = useTranslation('common')
  const langs = [
    {
      key: 'ru',
      label: 'ru'
    },
    {
      key: 'uz',
      label: 'uz'
    },
    {
      key: 'en',
      label: 'en'
    }
  ]
  return (
    <header className={styles.header}>
      <Container>
        awdawdawd
      </Container>
    </header>
  )
}
