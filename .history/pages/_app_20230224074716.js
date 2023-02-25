import '../css/style.css'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/nav'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>&lt;Korey ❤️ Coding/&gt;</title>
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
