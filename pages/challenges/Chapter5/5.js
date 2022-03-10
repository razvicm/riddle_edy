import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import { navigationStyles } from "../../../components/utils";

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
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter5/4">Inapoi</Link>
        <Link href="/challenges/Chapter5/6">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
