import "../styles/globals.css";
import Layout from "./layout";
import { NextUIProvider } from "@nextui-org/react";
import NextLink from "next/link";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Head>
        <title>Pierdut printre stele</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
