import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={60} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />

      <Text>
        Nu mai aveti nevoie de indiciile: <b>W, Z, L1, C si Q</b>.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter5/1">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter5/3">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
