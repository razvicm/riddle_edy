import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={14} />
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
    </>
  );
}

export default Chapter1;
