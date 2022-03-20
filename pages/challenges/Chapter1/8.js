import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={11} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      <Text>
        Felicitari! Ati aflat combinatia pentru cutia neagra!
        <br />
        Acum ar fi recomandat sa treceti informatiile obtinute pe pagina
        profilului criminal. (trasaturi fizice, sexul - masculin/feminin/gen
        necunoscut, complice - da/nu, etc.)
        <Spacer />
        Nu mai aveti nevoie de indiciile <b>T, J, G</b>.
        <Spacer />
        <b>Intoarceti-va la locul in care ati primit plicul.</b>
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter1/7">
          <Link>Inapoi</Link>
        </NextLink>
        {/* <NextLink href="/challenges/Chapter1/9">
          <Link>Mai departe</Link>
        </NextLink> */}
      </div>
    </>
  );
}

export default Chapter1;
