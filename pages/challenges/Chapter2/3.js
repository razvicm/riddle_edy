import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={9} />
      <Spacer />
      <Text h3>Capitolul 2</Text>
      <Spacer />
      <Text>
        Scoateti din plic indiciile indicile A, A1, M, S, Z, L, L1, R, O
      </Text>
    </>
  );
}

export default Chapter1;
