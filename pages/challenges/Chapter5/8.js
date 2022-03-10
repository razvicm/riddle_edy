import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={18} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />
      <Text>
        Asupra ei nu am gasit multe indicii, doar o scrisoare din care reiese ca
        a reusit sa dezvaluie identitatea ucigasului. Cel mai probabil pentru
        asta trebuia sa si moara, dar din pacate locul unde era numele acestuia
        era patata cu sange si nu am putut descifra nimic.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter5/7">Inapoi</Link>
        <Link href="/challenges/Chapter5/9">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
