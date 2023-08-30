import React from 'react'

import styles from './index.module.scss'
import { mockGetUsers } from './mock/users'
import { mockGetMessages } from './mock/messages'
import { Message } from 'src/types/message'
import NavigationBar from './components/navigationBar'
import Footer from './components/footer'
import { User } from 'src/types/user'
import Tab from './components/tab'
import { ActiveTab } from './types/activeTab'
import Messages from './components/messages'
import UserTable from './components/userTable'

const Portal = () => {
  const [activeTab, setActiveTab] = React.useState(ActiveTab.USERS)
  const [users, setUsers] = React.useState<User[]>([])
  const [messages, setMessages] = React.useState<Message[]>([])

  React.useEffect(() => {
    if (!users.length && activeTab === ActiveTab.USERS) {
      mockGetUsers().then((users) => setUsers(users))
    } else if (!messages.length && activeTab === ActiveTab.MESSAGES) {
      mockGetMessages().then((messages) => setMessages(messages))
    }
  }, [users, messages, activeTab])

  const getPreview = () => {
    if (users.length && activeTab === ActiveTab.USERS) {
      return <UserTable users={users} />
    }
    if (messages.length && activeTab === ActiveTab.MESSAGES) {
      return <Messages messages={messages} />
    }
    return null
  }

  return (
    <div className={styles['portal-container']}>
      <NavigationBar />
      <div className={styles['tab-content']}>
        <Tab
          title="Users"
          isActive={activeTab === ActiveTab.USERS}
          onClick={() => setActiveTab(ActiveTab.USERS)}
        />
        <Tab
          title="Messages"
          isActive={activeTab === ActiveTab.MESSAGES}
          onClick={() => setActiveTab(ActiveTab.MESSAGES)}
        />
      </div>
      <div className={styles['portal-preview']}>{getPreview()}</div>
      <Footer />
    </div>
  )
}

export default Portal
