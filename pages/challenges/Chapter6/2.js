import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={84} />
      <Spacer />
      <Text h3>Capitolul 6</Text>

      <Spacer />
      <Text>
        Scoateti din plic indiciile <b> B si V</b>
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter6/1">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter6/3">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
