import Text from '../text'
import styles from './index.module.scss'

interface Props {
  introTitle: string
  introDescription: string
}

const AuthIntro = ({ introTitle, introDescription }: Props) => {
  return (
    <div className={styles['intro-container']}>
      <Text as="h1" variant="title" className={styles.title}>
        {introTitle}
      </Text>
      <Text as="h2" variant="subtitle" className={styles.subtitle}>
        {introDescription}
      </Text>
    </div>
  )
}

export default AuthIntro
