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
      <Progress color="primary" value={45} />
      <Spacer />
      <Text h3>Capitolul 4</Text>
      <Spacer />
      <Text>
        Cautati focul vesnic si introduceti cuvantul in care se descrie o alta
        etnie.
      </Text>
      <Spacer />
      <Input placeholder="Introduceti cuvantul" size="sm" />
      <Spacer />
      <Button>Continua</Button>
    </>
  );
}

export default Chapter1;
