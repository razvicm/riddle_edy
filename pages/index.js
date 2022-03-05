import { Button, Link, Spacer } from "@nextui-org/react";

import React from "react";

function HomePage() {
  return (
    <>
      <Link href="challenges/Chapter1">Capitolul 1</Link>
      <Spacer y={2} />
      <Link href="challenges/Chapter2">Capitolul 2</Link>
      <Spacer y={2} />
      <Link href="challenges/Chapter3">Capitolul 3</Link>
      <Spacer y={2} />
      <Link href="challenges/Chapter4">Capitolul 4</Link>
      <Spacer y={2} />
      <Link href="challenges/Chapter5">Capitolul 5</Link>
      <Spacer y={2} />
      <Link href="challenges/Chapter6">Capitolul 6</Link>
      <Spacer y={2} />
    </>
  );
}

export default HomePage;
