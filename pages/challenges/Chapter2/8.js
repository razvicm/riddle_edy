import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={24} />
      <Spacer />
      <Text h3>Capitolul 2</Text>
      <Spacer />
      <Text>Dintre indiciile din al doilea capitol pastrati doar Z si L1</Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter2/7">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter3/0-0">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
