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
      <Progress color="primary" value={7} />
      <Spacer />
      <Text h3>Capitolul 2</Text>
      <Spacer />

      <Text>
        Cautati monumentul negru la baza caruie se gasesc 7 lumanari.
        <Spacer />
        Introduceti anul care este trecut de trei ori pe acesta.
      </Text>
      <Spacer />
      <Input placeholder="Introduceti anul" size="sm" type="tel" />
      <Spacer />
      <Button>Continua</Button>
    </>
  );
}

export default Chapter1;
