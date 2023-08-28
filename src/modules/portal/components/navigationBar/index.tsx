import { useAtom } from 'jotai'
import { useTranslation } from 'react-i18next'

import Text from 'src/components/text'
import styles from './index.module.scss'
import { userAtom } from 'src/atoms/user'
import localStorageKeys from 'src/const/localStorage'

const NavigationBar = () => {
  const { t } = useTranslation()
  const [user, setUser] = useAtom(userAtom)

  const handleLogout = () => {
    localStorage.removeItem(localStorageKeys.TOKEN)
    setUser(undefined)
  }

  return (
    <nav className={styles['navigation-bar-container']}>
      <div>
        <Text as="h1" variant="title-medium">
          {t('portal.demoPortal')}
        </Text>
      </div>
      <section className={styles['user-info-group']}>
        <img src="/user.png" alt="User" />
        <div className={styles['user-options-position']}>
          <Text
            className={
              styles['user-full-name-text']
            }>{`${user?.firstName} ${user?.lastName}`}</Text>
          <button className={styles['logout-button']} onClick={handleLogout}>
            <Text className={styles['logout-text']}>{t('portal.logout')}</Text>
          </button>
        </div>
      </section>
    </nav>
  )
}

export default NavigationBar
