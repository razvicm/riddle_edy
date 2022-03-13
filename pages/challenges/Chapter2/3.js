import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={19} />
      <Spacer />
      <Text h3>Capitolul 2</Text>
      <Spacer />
      <Text>
        Scoateti din plic indiciile indicile A, A1, M, S, Z, L, L1, R, O
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter2/2">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter2/4">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
