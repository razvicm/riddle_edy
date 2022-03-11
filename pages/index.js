import { Button, Link, Spacer } from "@nextui-org/react";
import Head from "next/head";

import React from "react";

function HomePage() {
  return (
    <>
      <Head>
        <title>Pierdut printre stele</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Link href="challenges/Chapter1/1">Capitolul 1</Link>
      <Spacer y={2} />
      <Link href="challenges/Chapter2/1">Capitolul 2</Link>
      <Spacer y={2} />
      <Link href="challenges/Chapter3/1">Capitolul 3</Link>
      <Spacer y={2} />
      <Link href="challenges/Chapter4/1">Capitolul 4</Link>
      <Spacer y={2} />
      <Link href="challenges/Chapter5/1">Capitolul 5</Link>
      <Spacer y={2} />
      <Link href="challenges/Chapter6/1">Capitolul 6</Link>
      <Spacer y={2} />
    </>
  );
}

export default HomePage;
