import { User } from 'src/types/user'
import styles from './index.module.scss'

interface Props {
  users: User[]
}

const UserTable = ({ users }: Props) => {
  return (
    <table className={styles['table-container']}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
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
