import { db } from '../firebase-client'

export const createUser = async ({ id, login, avatar_url }, onSuccess = () => {}) => {
  await db.collection("devs").add({
    id, login, avatar_url
  })
  onSuccess()
}
