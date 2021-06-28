import { useState } from "react"
import { useRouter } from 'next/router'
import { createUser } from "../../actions/createUser"

const Create = () => {
  const [login, setLogin] = useState("")
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = async e => {
    e.preventDefault()
    setError(false)
    const res = await fetch(`https://api.github.com/users/${login}`)

    if (res.ok){
      const data = await res.json()
      createUser(data, () => {
        router.push('/')
      })
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