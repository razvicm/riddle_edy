import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={15} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      <Text>
        Scoateti din plic indiciile: N, H, X, U si inlaturati indiciile B si V.
      </Text>
    </>
  );
}

export default Chapter1;
