import Image from "next/image";
import { useRouter } from "next/router";
import { db } from "../../firebase-client";

const Dev = ({ dev }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{dev.login}</h1>
      <Image src={dev.avatar_url} alt={dev.login} width="200" height="200" />
    </>
  );
};

export async function getStaticProps({ params: { login } }) {
  let dev = undefined;

  const snapshot = await db.collection("devs").get();
  snapshot.forEach((doc) => {
    const data = doc.data();
    if (data.login === login) {
      dev = { ...data };
    }
  });

  if (!dev) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      dev,
    },
  };
}

export async function getStaticPaths() {
  let devs = [];

  const snapshot = await db.collection("devs").get();
  snapshot.forEach((doc) => {
    devs = [...devs, doc.data()];
  });

  return {
    paths: devs.map((dev) => ({ params: { login: dev.login } })),
    fallback: true,
  };
}

export default Dev;
