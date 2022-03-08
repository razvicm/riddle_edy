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
      <Progress color="primary" value={35} />
      <Spacer />
      <Text h3>Capitolul 3</Text>
      <Spacer />

      <Text>Introduceti codul cheie</Text>
      <Spacer />
      <Input placeholder="Introduceti codul" size="sm" />
      <Spacer />
      <Button>Continua</Button>
    </>
  );
}

export default Chapter1;
