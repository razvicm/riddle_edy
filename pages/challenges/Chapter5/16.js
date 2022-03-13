import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={80} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />
      <Text>Nu mai aveti nevoie de indiciile: Y si P.</Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter5/15">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter6/1">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
