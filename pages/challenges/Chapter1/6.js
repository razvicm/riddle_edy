import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={8} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      <Text> Verificati indiciul Q.</Text>
      <Spacer />
      <Text>
        <i>Cineva neautorizat s-a logat in bordul navei</i>
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter1/5">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter1/7">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
