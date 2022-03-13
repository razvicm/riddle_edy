import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={26} />
      <Spacer />
      <Text h3>Capitolul 3</Text>
      <Spacer />
      <Text>
        Am auzit mai multe focuri de arma dar nu am putut identifica exact
        locatia din cauza ecourilor. Dar acesta nu m-a impiedicat a gasi locul,
        deoarece prin statie am primit informatii suficiente pentru a localiza
        cu exactitate zona in care s-a tras.
        <br /> Prima data Philip a auzit focurile de arma dar a fost numai al
        treilea care m-a sunat.
        <br /> Mai rapid ca Philip a fost Martin. <br />
        Alex a fost si mai rapid decat Martin chiar daca nu a avut multe
        informatii.
        <br /> Ultimul care a sunat a fost Teodor, dar el a si oferit cele mai
        multe si mai precise indicii.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter3/0-1">Inapoi</Link>
        <Link href="/challenges/Chapter3/0-3">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
