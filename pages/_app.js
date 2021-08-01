import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <div>Header</div>
    <Component {...pageProps} />
  </>
}

export default MyApp
