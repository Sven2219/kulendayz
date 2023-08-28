import icons from './icons'
import styles from './index.module.scss'

const Footer = () => {
  return (
    <footer className={styles['footer-container']}>
      <ul className={styles['footer-list']}>
        {icons.map((el) => (
          <li key={el.name} className={styles['footer-item']}>
            <img src={el.src} alt={el.name} />
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
