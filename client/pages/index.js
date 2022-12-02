import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nhan Nguyen - Construction Document Management</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          More Contents to be updated!
        </h1>
      </main>
    </div>
  )
}