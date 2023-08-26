import styles from './index.module.scss'

const Footer = () => {
  return (
    <div className={styles['footer-container']}>
      <div className={styles['footer-element']}>
        <img src="/icons/facebook.svg" alt="Facebook" />
        <img src="/icons/instagram.svg" alt="Instagram" />
        <img src="/icons/youtube.svg" alt="YouTube" />
        <img src="/icons/linkedin.svg" alt="LinkedIn" />
      </div>
    </div>
  )
}

export default Footer
