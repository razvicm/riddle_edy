import "../styles/globals.css";
import Layout from "./layout";
import { NextUIProvider } from "@nextui-org/react";
import NextLink from "next/link";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Head>
        <title>Rejtveny</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          httpEquiv="refresh"
          content="0"
          url="https://www.conductor.com/"
        ></meta>
        <meta property="og:title" content="European Travel Destinations" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1713189005053-e38b1b88ac4a?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <meta
          property="og:url"
          content="http://euro-travel-example.com/index.htm"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
