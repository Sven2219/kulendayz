import styles from './index.module.scss'

const LoadingIndicator = () => {
  return (
    <div className={styles['indicator-container']}>
      <div className={styles.indicator} />
    </div>
  )
}

export default LoadingIndicator
