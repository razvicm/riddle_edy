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
      <Text h3>Capitolul 3</Text>
      <Spacer />
      <Text>Puteti pune deoparte indiciile K, D, F</Text>
    </>
  );
}

export default Chapter1;
