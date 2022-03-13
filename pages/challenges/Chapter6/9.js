import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={98} />
      <Spacer />
      <Text h3>Capitolul 6</Text>
      <Spacer />
      <Text>
        Dupa ce am reusit sa descifrez nota muzicala si sa gesesc procesoarele
        corecte si combinand cele trei forme geometrice am avut si codul de
        repornire. Dupa ce sistemul din nou era online am reusit sa las si
        mesajul SOS. Apoi am parasit epava si ne-am indreptat rapid spre naveta
        sperand ca totul este pregatit de plecare.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter6/8">Inapoi</Link>
        <Link href="/challenges/Chapter6/10">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
