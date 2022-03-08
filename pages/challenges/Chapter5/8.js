import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

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
    </>
  );
}

export default Chapter1;
