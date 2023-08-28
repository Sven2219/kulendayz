import Text from 'src/components/text'
import { Message } from 'src/types/message'
import styles from './index.module.scss'

interface Props {
  messages: Message[]
}

const Messages = ({ messages }: Props) => {
  return (
    <ul className={styles['message-container']}>
      {messages.map((el, index) => (
        <li className={styles['message-item']} key={el.id}>
          <Text>
            Message {index}: {el.message}
          </Text>
        </li>
      ))}
    </ul>
  )
}

export default Messages
