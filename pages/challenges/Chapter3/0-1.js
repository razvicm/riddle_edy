import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={25} />
      <Spacer />
      <Text h3>Capitolul 3</Text>
      <Spacer />
      <Text>Scoateti din plic indiciile I, F, D</Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter3/0-0">Inapoi</Link>
        <Link href="/challenges/Chapter3/0-2">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
