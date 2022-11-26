import { Header, Main, Sidebar } from '../components'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps, mosqueData}) {
  console.log(mosqueData)
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type== "mosque"]'
  const mosqueData = await client.fetch(query)

  return {
    props:{
      mosqueData
    }
  }
}

export default MyApp
