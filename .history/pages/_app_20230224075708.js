import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Link from 'next/link'
import Form from 'react-bootstrap/Form';
import Navigation from '../components/nav'
import { useState,useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
      );
      const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };
      useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
      }, [theme]);
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
