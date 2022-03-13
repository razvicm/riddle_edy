import { Button, Link, Spacer } from "@nextui-org/react";
import Head from "next/head";
import NextLink from "next/link";

import React from "react";

function HomePage() {
  return (
    <>
      <NextLink href="challenges/Intro/1">
        <Link>Intro</Link>
      </NextLink>
      <Spacer y={2} />
      <NextLink href="challenges/Chapter1/1">
        <Link>Capitolul 1</Link>
      </NextLink>
      <Spacer y={2} />
      <NextLink href="challenges/Chapter2/1">
        <Link>Capitolul 2</Link>
      </NextLink>
      <Spacer y={2} />
      <NextLink href="challenges/Chapter3/0-0">
        <Link>Capitolul 3</Link>
      </NextLink>
      <Spacer y={2} />
      <NextLink href="challenges/Chapter4/1">
        <Link>Capitolul 4</Link>
      </NextLink>
      <Spacer y={2} />
      <NextLink href="challenges/Chapter5/1">
        <Link>Capitolul 5</Link>
      </NextLink>
      <Spacer y={2} />
      <NextLink href="challenges/Chapter6/1">
        <Link>Capitolul 6</Link>
      </NextLink>
      <Spacer y={2} />
    </>
  );
}

export default HomePage;
