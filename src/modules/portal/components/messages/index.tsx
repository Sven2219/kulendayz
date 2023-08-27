import Text from 'src/components/text'
import { Message } from 'src/types/message'
import styles from './index.module.scss'

interface Props {
  messages: Message[]
}

const Messages = ({ messages }: Props) => {
  console.log(messages)
  return (
    <div className={styles['message-container']}>
      {messages.map((el, index) => (
        <div className={styles['message-item']} key={el.id}>
          <Text>
            Message {index}: {el.message}
          </Text>
        </div>
      ))}
    </div>
  )
}

export default Messages
