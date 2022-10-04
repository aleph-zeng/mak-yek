import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mak Yek</title>
        <meta name="description" content="A chess game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen grid place-items-center">hello there</main>
    </div>
  )
}

export default Home
