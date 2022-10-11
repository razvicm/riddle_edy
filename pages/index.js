import { Button, Link, Spacer } from "@nextui-org/react";
import Head from "next/head";
import NextLink from "next/link";

import React from "react";

function HomePage() {
  return (
    <>
      <NextLink href="riddles/1">
        <Button>Start</Button>
      </NextLink>
    </>
  );
}

export default HomePage;
