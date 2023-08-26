import { useAtomValue } from 'jotai'
import { useTranslation } from 'react-i18next'

import Text from 'src/components/text'
import styles from './index.module.scss'
import { userAtom } from 'src/atoms/user'

const NavigationBar = () => {
  const { t } = useTranslation()
  const user = useAtomValue(userAtom)
  return (
    <div className={styles['navigation-bar-container']}>
      <div>
        <Text as="h1" variant="title">
          {t('portal.demoPortal')}
        </Text>
      </div>
      <div className={styles['user-info-group']}>
        <div className={styles['user-icon']} />
        <div>
          <Text
            className={
              styles['user-full-name-text']
            }>{`${user.firstName} ${user.lastName}`}</Text>
          <Text className={styles['user-role-text']}>
            {t('portal.userRole')}
          </Text>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
