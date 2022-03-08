import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={18} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      <Text>
        Felicitari ati aflat combinatia pentru cutia neagra!
        <br />
        Acum ar fi recomandat sa treceti informatiile obtinute pe pagina
        profilul criminal.
        <br />
        Intoarceti-va la locul unde ati primit plicul. <br /> Nu mai aveti
        nevoie de indiciile T, J, G.
      </Text>
    </>
  );
}

export default Chapter1;
