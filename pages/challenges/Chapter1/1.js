import { Progress, Spacer, Text, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={1} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />

      <Text>
        Am ajuns si la ultimul loc din zona aterizarii unde inca nu am verificat
        daca se afla inginerul de bord George Oven. Era o bucata destul de mare
        care s-a rupt din nava la aterizare. La prima vedere totul era in ordine
        dar linistea era prea mare. Dupa ce am intrat inauntru am dat peste o
        dezordine totala si aproape ca nu se vedea nimic. Singurele surse de
        lumina erau un monitor spart care aparent mai functiona si niste cabluri
        din care ieseau scantei. Chiar si asa, repede ne-am dat seama ca in
        locul acesta s-a produs o crima. Oven era intins fara suflare pe podea,
        aparent strangulat.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Intro/1">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter1/2">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
