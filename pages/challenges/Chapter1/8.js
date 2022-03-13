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
        profilul criminal.
        <br />
        Intoarceti-va la locul unde ati primit plicul. <br /> Nu mai aveti
        nevoie de indiciile T, J, G.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter1/7">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter1/9">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
