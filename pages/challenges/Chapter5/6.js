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
        Cautati indicatorul cu pescar aflat pe malul raului si introduceti
        cuvantul al treilea de pe acesta.
      </Text>
      <Spacer />
      <Input placeholder="Introduceti cuvantul" size="sm" />
      <Spacer />
      <Button>Continua</Button>
    </>
  );
}

export default Chapter1;
