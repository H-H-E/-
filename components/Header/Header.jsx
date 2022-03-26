import Link from 'next/link'
import styles from './Header.module.scss'
import { useAppContext } from '../../context/AppContext'

export const Header = () => {
  const { currentExample } = useAppContext()

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>Home</a>
      </Link>

      {currentExample.title && (
        <Link href={currentExample.url}>
          <a target="_blank">Mariam Zahw</a>
        </Link>
      )}
    </header>
  )
}
