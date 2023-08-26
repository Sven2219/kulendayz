import { User } from 'src/types/User'

const users: User[] = new Array(20).fill(0).map((_, index) => ({
  id: index.toString(),
  email: `sven.suk${index}@gmail.com`,
  firstName: `Sven${index}`,
  lastName: `Suk${index}`,
}))

export const mockGetUsers = (): Promise<User[]> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(users)
    }, 2000)
  )
}
