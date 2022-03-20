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
        Scoateti din plic indiciile cu literele{" "}
        <b>C, G, Q, J, T, harta si profilul criminal</b>. <br />
        Pentru a rezolva ghicitoarea <b>J</b> trebuie sa raspundeti la
        urmatoarele intrebari. Cuvintele pot fi marcare orizontal sau vertical
        in tabel. Fiecare cuvant apare doar o singura data. <Spacer />
        1. Il folosim pentru masurarea timpului.
        <br /> 2. Obiect stelar care se roteste un jurul unei stele. <br />
        3. Un metal galben auriu care contine mult cupru. Din el se fabrica tevi
        de gaz si intalatiile sanitare. <br />
        4. O fiinta mitica cu urechi ascutite. Apare si in Stapanul Inelelor.
        <Spacer />
        Dupa ce ati rezolvat indiciile <b>C,G,J si T</b> puteti merge mai
        departe
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
