import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Create = () => {
  const [login, setLogin] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleCreateUser = ({ id, login, avatar_url }) => {
    axios
      .post(`/api/create`, { id, login, avatar_url })
      .then(() => router.push("/"))
      .catch((err) => setError(true));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (login === "") {
      setError(true);
      return;
    }

    setError(false);
    axios
      .get(`https://api.github.com/users/${login}`)
      .then(({ data }) => handleCreateUser(data))
      .catch((err) => setError(true));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="github login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <button>{`Search & Add`}</button>
      <p>{error && "Github user not found"}</p>
    </form>
  );
};

export default Create;
