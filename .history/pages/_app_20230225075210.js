import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Link from 'next/link'
import Form from 'react-bootstrap/Form';
import Navigation from '../components/nav'
import { useState,useEffect } from 'react';
// import bg from '/images/markus-spiske-GXBF7vaC6L8-unsplash.jpg'
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(

    typeof window !== "undefined" ? localStorage.theme : "light"
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
    <div className=''
     style={{
      backgroundImage: `url(/images/markus-spiske-GXBF7vaC6L8-unsplash.jpg)`,
      width: '100%',
      height: '100%',
    }}
    >
      <Head>
        <title>&lt;Korey ❤️ Coding/&gt;</title>
        <link rel="icon" href="/puzzle-piece.svg" />
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
    </div>
  )
}

export default MyApp
