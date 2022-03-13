import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={4} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      <Text>
        Scoateti din plic indicile cu literele C, G, Q, J, T, harta si profilul
        criminal. <br />
        Pentru a rezolva ghicitoarea <b>J</b> trebuie sa raspundeti la
        urmatoarele intrebari. Cuvintele pot fi marcare orizontal sau vertical
        in tabel. Fiecare cuvant apare doar o singura data. <br />
        Il folosim pentru masurarea timpului.
        <br /> Obiect stelar care se roteste un jurul unei stele. <br />
        Un metal galben auriu care contine mult cupru. Din el se fabrica tevi de
        gaz si intalatiile sanitare. <br />O fiinta mitica cu urechi ascutite.
        Apare si in Stapanul Inelelor.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter1/2">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter1/4">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
