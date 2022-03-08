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
      <Progress color="primary" value={10} />
      <Spacer />
      <Text h3>Capitolul 6</Text>
      <Spacer />

      <Spacer />
      <Text>Indtroduceti codul secret pentru ultima locatie.</Text>
      <Spacer />
      <Input placeholder="Introduceti codul" size="sm" />
      <Spacer />
      <Button>Continua</Button>

      <Text>Urmatoarea locatie este: biserica din Piata Muzeului.</Text>
    </>
  );
}

export default Chapter1;
