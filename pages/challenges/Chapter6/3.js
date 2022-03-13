import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={86} />
      <Spacer />
      <Text h3>Capitolul 6</Text>
      <Spacer />
      <Text>
        Noi ne aflam pe harta pe pozitia X urmarind interferentele si directia
        semnalului de pe dispozitiv trebuie sa gasim drumul corect.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter6/2">Inapoi</Link>
        <Link href="/challenges/Chapter6/4">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
