import { useState } from "react"
import { useRouter } from 'next/router'
import axios from "axios"

const Create = () => {
  const [login, setLogin] = useState("")
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = async e => {
    e.preventDefault()
    setError(false)
    const res = await axios.get(`https://api.github.com/users/${login}`)

    if (res.status === 200){
      const { data } = res
      const res2 = await axios.post(`/api/create`, {
        id: data.id,
        login: data.login,
        avatar_url: data.avatar_url,
      })

      if (res2.status === 200) {
        router.push('/')
      }
      else {
        setError(true)
      }
    }

    else {
      setError(true)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder="github login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <button>{`Search & Add`}</button>
      <p>{error && "Github user not found"}</p>
    </form>
  )
}

export default Create