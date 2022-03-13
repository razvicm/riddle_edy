import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={53} />
      <Spacer />
      <Text h3>Capitolul 4</Text>
      <Spacer />
      <Text>Scoateti din plic indiciul E</Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter4/7">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter4/9">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
