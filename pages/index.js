import Image from 'next/image'
import Link from 'next/link'
import { db } from '../firebase-client'

export default function Home({ devs }) {
  return (
    <div>
      <main>
        <h1>
          Cornershop Shopping Tech Frontend Dev List
        </h1>

        <div className="add-user-button">
          <Link href="/devs/create"><a className="add-user-link">Add dev</a></Link>
        </div>

        <section className="users-grid">
          {devs.map(dev =>
            <div className="users-grid-item" key={dev.id}>
              <Link href={`/devs/${dev.login}`}>
                <a>
                  <Image src={dev.avatar_url} alt={dev.login} width="200" height="200" />
                  <p>{dev.login}</p>
                </a>
              </Link>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  let devs = []

  const snapshot = await db.collection("devs").get()
  snapshot.forEach((doc) => {
    devs = [...devs, doc.data()]
  })

  return {
    props: {
      devs
    },
  }
}
