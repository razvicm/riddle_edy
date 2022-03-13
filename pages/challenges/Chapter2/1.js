import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={16} />
      <Spacer />
      <Text h3>Capitolul 2</Text>
      <Spacer />

      <Text>
        Planeta pe care ne-am prabusit este una destul de ostila, fierbinte si
        cu putine rezerve de apa si aparent nelocuita. Din putinele date pe care
        am reusit sa le obtinem despre ea, a iesit la iveala ca era in
        apropierea noastra o mina care a fost parasita in graba acum jumatate de
        secol.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter1/10">Inapoi</Link>
        <Link href="/challenges/Chapter2/2">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
