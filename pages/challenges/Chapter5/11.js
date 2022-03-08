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
      <Text h3>Capitolul 5</Text>
      <Spacer />
      <Text>
        Cautati crucea din varful muntelui pe ea se afla doua cuvinte.
        Introduceti prima si ultima litera din primul cuvant si la fel pentru al
        doilea.
      </Text>
      <Spacer />
      <Input placeholder="Introduceti cuvantul" size="sm" />
      <Spacer />
      <Button>Continua</Button>
    </>
  );
}

export default Chapter1;
