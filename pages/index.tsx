import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Main from '../components/main'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mak Yek</title>
        <meta name="description" content="A chess game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-slate-50">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default Home
