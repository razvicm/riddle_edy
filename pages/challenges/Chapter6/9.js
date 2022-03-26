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
        Dupa ce am reusit sa descifrez nota muzicala si sa gasesc procesoarele
        corecte si combinand cele trei forme geometrice am avut si codul de
        repornire. Dupa ce sistemul din nou era online am reusit sa las si
        mesajul SOS. Apoi am parasit epava si ne-am indreptat rapid spre naveta
        sperand ca totul este pregatit de plecare
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter6/8">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter6/10">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
