import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

// import components
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      delay: 2000,
      duration: 800,
    })
  })
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
