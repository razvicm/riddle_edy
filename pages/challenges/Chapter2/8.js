import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={25} />
      <Spacer />
      <Text h3>Capitolul 2</Text>
      <Spacer />
      <Text>Dintre indiciile din al doilea capitol pastrati doar Z si L1</Text>
    </>
  );
}

export default Chapter1;
