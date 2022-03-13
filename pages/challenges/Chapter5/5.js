import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={66} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />

      <Text>
        Sunetul intr-un labirint preia proprietatiile unui lichid. Umple toate
        golurile si parcurge toate traseele care ii permite labirintul. Deci
        sarcina era simpla, trebuia sa urmarim inapoi traseul ecoului din
        punctul in care a parasit labirintul pana la locul de unde a tras
        ucigasul.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter5/4">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter5/6">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
