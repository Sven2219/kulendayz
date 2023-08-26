import { Message } from 'src/types/message'

const messages: Message[] = new Array(20).fill(0).map((_, index) => ({
  id: index.toString(),
  message: `Hello there ${index}`,
}))

export const mockGetMessages = (): Promise<Message[]> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(messages)
    }, 2000)
  )
}
