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
      <Progress color="primary" value={70} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />

      <Text>Introduceti codul primit la reactia chimica</Text>
      <Spacer />
      <Input placeholder="Introduceti codul" size="sm" />
      <Spacer />
      <Button>Continua</Button>
    </>
  );
}

export default Chapter1;
