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
      <Progress color="primary" value={18} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      <Text>Introdu codul din 3 cifre pentru repornirea sistemului.</Text>
      <Spacer />
      <Input placeholder="Introduceti codul" size="sm" type="tel" />
      <Spacer />
      <Button>Continua</Button>
    </>
  );
}

export default Chapter1;
