import { useTranslation } from 'react-i18next'

import { User } from 'src/types/user'
import styles from './index.module.scss'

interface Props {
  users: User[]
}

const UserTable = ({ users }: Props) => {
  const { t } = useTranslation()

  return (
    <table className={styles['table-container']}>
      <thead>
        <tr>
          <th>{t('portal.userTableID')}</th>
          <th>{t('portal.userTableEmail')}</th>
          <th>{t('portal.userTableFirstName')}</th>
          <th>{t('portal.userTableLastName')}</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={`${index}`}>
            <td>{index}</td>
            <td>{user.email}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
