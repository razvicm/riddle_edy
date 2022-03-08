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
      <Progress color="primary" value={14} />
      <Spacer />
      <Text h3>Capitolul 6</Text>
      <Spacer />

      <Text>
        Langa biserica se afla o usa deasupra ei este o cruce sculptata. In
        dreapta crucii se afla un an iar in stanga un cuvat. Te rog sa introduci
        cuvantul.
      </Text>
      <Spacer />
      <Input placeholder="Introduceti cuvantul" size="sm" />
      <Spacer />
      <Button>Continua</Button>
    </>
  );
}

export default Chapter1;
