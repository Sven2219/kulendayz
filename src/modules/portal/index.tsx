import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAtomValue } from 'jotai'

import styles from './index.module.scss'
import { mockGetUsers } from './mock/users'
import { mockGetMessages } from './mock/messages'
import { User } from 'src/types/User'
import { Message } from 'src/types/message'
import { userAtom } from 'src/atoms/user'
import NavigationBar from './components/navigationBar'
import Footer from './components/footer'

const Portal = () => {
  const user = useAtomValue(userAtom)
  const { t } = useTranslation()
  const [users, setUsers] = React.useState<User[]>([])
  const [messages, setMessages] = React.useState<Message[]>([])

  React.useEffect(() => {
    mockGetUsers().then(setUsers)
    mockGetMessages().then(setMessages)
  }, [])

  console.log('Logged in user', user)

  console.log(messages, users)
  return (
    <div className={styles['portal-container']}>
      <NavigationBar />
      <div className={styles['portal-body']}></div>
      <Footer />
    </div>
  )
}

export default Portal
