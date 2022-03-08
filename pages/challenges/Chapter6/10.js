import {
  Progress,
  Spacer,
  Text,
  Radio,
  Input,
  Button,
} from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={15} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      <Text>
        Acum ca totul este pregatit de decolare sper ca ati reusit sa
        identificati ucigasul. Deplasati-va inapoi la orasul minerilor unde se
        afla si naveta(locatia din cap 2), pentru a confrunta ucigasul. Acolo o
        sa gasiti si pe cineva din echipaj care va va indruma.
      </Text>
    </>
  );
}

export default Chapter1;
