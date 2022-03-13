import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={46} />
      <Spacer />
      <Text h3>Capitolul 4</Text>
      <Spacer />

      <Text>
        Am ajuns inapoi la baza noastra unde s-au adunat toti supravietuitorii.
        Avem o sarcina foarte importanta si urgenta. Trebuie sa gasim pe cineva
        care sa restaureze clipul deteriorat de pe notebook-ul jurnalistului,
        sperand ca acesta ne va livra informatii noi. Am inceput sa citesc din
        nou lista de pasageri si abilitatile lor.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter4/3">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter4/5">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
