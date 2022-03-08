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
        Dupa ce am reusit sa descifrez nota muzicala si sa gesesc procesoarele
        corecte si combinand cele trei forme geometrice am avut si codul de
        repornire. Dupa ce sistemul din nou era online am reusit sa las si
        mesajul SOS. Apoi am parasit epava si ne-am indreptat rapid spre naveta
        sperand ca totul este pregatit de plecare.
      </Text>
    </>
  );
}

export default Chapter1;
