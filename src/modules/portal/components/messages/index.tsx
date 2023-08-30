import { Message } from 'src/types/message'
import styles from './index.module.scss'
import Text from 'src/modules/shared/components/text'

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
