import '../css/style.css'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/nav'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pet Care App</title>
      </Head>

      <div className="top-bar">
        <Navigation/>
      </div>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
