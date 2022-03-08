import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={18} />
      <Spacer />
      <Text h3>Capitolul 4</Text>
      <Spacer />
      <Text>Scoateti din plic indiciul E</Text>
    </>
  );
}

export default Chapter1;
