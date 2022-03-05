import '../styles/globals.css'
import Layout from './layout'
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  return <NextUIProvider>
    <Layout >
      <Component {...pageProps} />
    </Layout>
  </NextUIProvider>

}

export default MyApp
