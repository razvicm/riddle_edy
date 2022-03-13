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
      <Text>
        Dupa ce am parasit baza, fiecare membru din grupul nostru a luat un alt
        drum, pentru ca in scurt timp sa reusim sa acoperim o zona cat mai mare,
        poate reusind sa aflam alte informatii sau gasi alte lucruri utile. Dupa
        o vreme am primit o veste destul de ingrijoratoare pe canalul nostru de
        comunicare. Se auzisera focuri de arma in apropiere. Eu nu am auzit
        nimic, dar eram aproape sigur ca ucigasul a lovit din nou. Am primit mai
        multe anunturi de la oamenii mei din care a trebuit sa aflu unde s-a
        comis posibila crima.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter2/8">Inapoi</Link>
        <Link href="/challenges/Chapter3/0-1">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
