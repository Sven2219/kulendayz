import { atom } from 'jotai'

import { User } from 'src/types/User'

export const userAtom = atom<User>({
  id: '',
  email: '',
  firstName: '',
  lastName: '',
})
