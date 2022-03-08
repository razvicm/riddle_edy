import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={20} />
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
    </>
  );
}

export default Chapter1;
