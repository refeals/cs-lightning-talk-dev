import { db } from '../../firebase-client'

export default function handler(req, res) {
  if (req.method === 'POST') {
    createUser(req.body)
    res.status(200).json({ success: true })
  }
  else {
    res.status(404)
  }
}

const createUser = async ({ id, login, avatar_url }) => {
  await db.collection("devs").add({
    id, login, avatar_url
  })
}
