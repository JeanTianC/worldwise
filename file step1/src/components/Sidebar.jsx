import AppNav from './AppNav'
import Logo from './Logo'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo/>
      <AppNav/>
      <p>A list of cites</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy;copyright {new Date().getFullYear()} by WorldWise Inc
        </p>
      </footer>
    </div>
  )
}
