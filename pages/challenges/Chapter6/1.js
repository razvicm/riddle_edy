import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={82} />
      <Spacer />
      <Text h3>Capitolul 6</Text>
      <Spacer />

      <Text>
        Inainte de a parasi planeta mai aveam o misiune foarte importanta.
        Naveta pe care gasisem era doar o naveta de imbarcare. Ea era conceputa
        doar sa transporte pasagerii de pe planeta la nava interstelara si
        invers, ea nu era conceputa sa parcurga distante mari in spatiu. Chiar
        in cele mai bune si optime conditii nu putea ajunge decat maxim 2 ani
        lumina. <Spacer /> Cea mai apropiata planeta locuita se afla la 25 ani
        lumina. De aceea trebuia sa cautam sistemul de comunicare al navetei
        noastre care s-a desprins de naveta cand a acesta a intrat in contact cu
        atmosfera planetei. Trebuia sa o cautam si sa trimitem un mesaj SOS ca
        asteptam la cea mai apropiata poarta interstelara care se afla la circa
        0.75 ani lumina de pozitia noastra.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter5/16">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter6/2">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
