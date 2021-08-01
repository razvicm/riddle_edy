import styles from '../styles/Home.module.scss'
import Image from 'next/image'


export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src={"/logo.png"} alt="logo" width={50} height={50} />
        <span>Inception Treasure Hunts </span>
        <span></span>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Copyright &copy; {new Date().getFullYear()} </footer>
    </div>
  )
}