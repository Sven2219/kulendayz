import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import Text from 'src/components/text'

const Portal = () => {
  const { t } = useTranslation()
  return (
    <div className={styles['portal-screen-wrapper']}>
      <Text>test</Text>
    </div>
  )
}

export default Portal
