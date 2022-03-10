import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={9} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />
      <Text>
        Dupa ce am reusit sa producem suficient acid sulfuric si am construit
        bateriile de rezerva am inceput transportul antimateriei. Cand aproape
        toate recipientele au ajuns la destinatia lor finala din cheile din
        apropiere s-a auzit o impuscatura. Cu totii eram siguri ca si acum
        murise cineva, iar ucigasul si-a gasit a treia victima. Ecolul focului
        de arma s-a auzit din zona x 8 y 1, dar asta nu insemna ca acolo s-a
        tras. Intr-un sistem de chei, pesteri si prapastii, cum era in cazul
        nostru undele sonore erau deviate in multe directii diferite pana ce
        acestea au reusit sa parasesca labirintul natural din piatra.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter5/2">Inapoi</Link>
        <Link href="/challenges/Chapter5/4">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
