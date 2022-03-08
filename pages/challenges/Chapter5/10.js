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
      Din cutia neagra a navei nu am reusit sa scoatem informatii foarte utile,
      dar macar am putut descarca lista pasagerilor si un scurt istoric despre
      fiecare.
      <br />
      Urmatoarea locatie este mina parasita.
      <br />
      <Spacer />
      Introduceti parola pentru capitolul 2
      <Spacer />
      <Input placeholder="Introduceti parola" size="sm" />
      <Spacer />
      <Button>Continua</Button>
    </>
  );
}

export default Chapter1;
