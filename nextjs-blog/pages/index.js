import Head from 'next/head'
import Bar from '../components/progressBar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Progress Bar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Bar></Bar>
        </div>
      </main>
    </div>
  )
}
