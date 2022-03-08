import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={7} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />

      <Text>Nu mai aveti nevoie de indiciile: W, Z, L1, C si Q.</Text>
    </>
  );
}

export default Chapter1;
