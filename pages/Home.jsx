import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../styles/Home.module.scss'
import { useAppContext } from '../context/AppContext'

const EXAMPLES = [
  

  {
    title: 'إلي أصدقائي',
    description: '3D Art gallery using R3F',
    path: '/examples/art-shelf',
    
  },
  
]

export default function Home() {
  const { setCurrentExample } = useAppContext()

  useEffect(() => {
    setCurrentExample({})
  }, [setCurrentExample])

  return (
    <>
      <Head>
        <title>MZ</title>
        <meta name="description" content="portfolio beta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.wrapper}>
        <h1 className={styles.title}>Miko</h1>

        <div className={styles.description}>
          By{' '}
          <a
            href="https://www.instagram.com/mariamzahw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mariamzahw
          </a>
        </div>

        <div className={styles.grid}>
          {EXAMPLES.map((example, i) => (
            <Link href={example.path} key={i}>
              <a className={styles.card}>
                <h2>{example.title}</h2>
                <p>{example.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
