import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <footer id="footer" className='d-flex justify-content-between'>
    {/* <Form> */}
        <Form.Check
      onClick={toggleTheme}
        type="switch"
        id="custom-switch"
        // label="Check this switch"
      />
    {/* </Form>  */}
        <h3 id="foot">&lt;dev.Korey&gt;Made With Love&lt;/dev.Korey&gt;</h3>
        </footer>
    </>
  )
}

export default MyApp
