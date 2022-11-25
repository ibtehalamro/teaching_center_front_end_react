import { Layout } from '../components/layout/Layout'
import '../styles/globals.scss'
import MainLayout from "../styles/layout/MainLayout.module.scss";
function MyApp({ Component, pageProps }) {
  return  (
  <div className={"mainContainer"}>
 <Layout>
  <Component {...pageProps} />
  </Layout>
  </div>
 )

}

export default MyApp
