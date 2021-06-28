import { db } from '../../firebase-client'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { id, login, avatar_url } = req.body
    db.collection("devs").add({ id, login, avatar_url })
      .then(() => res.status(200).json({ success: true }))
      .catch((err) => res.status(400).json({ success: false }))
  }
  else {
    res.status(404)
  }
}
