import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={9} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      <Text>
        Noi ne aflam pe harta pe pozitia X urmarind interferentele si directia
        semnalului de pe dispozitiv trebuie sa gasim drumul corect.
      </Text>
    </>
  );
}

export default Chapter1;
