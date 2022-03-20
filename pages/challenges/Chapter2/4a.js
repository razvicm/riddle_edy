import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={20} />
      <Spacer />
      <Text h3>Capitolul 2</Text>
      <Spacer />
      <Text>
        In cantina se gaseste un bar cu un raft cu sticle de alcool. Pe masa
        este o bucata de hartie pe care este vizibila comanda din ultimele zile.
        Dar cum il analizam mai in detaliu devine tot mai clar ca ascunde un cod
        pe care inca nu il intelegem.
        <Spacer /> Pe o masa din apropiere este un joc de rummy inca neterminat
        cu o notita de pe care aparent lipseste ceva. Foarte interesant.{" "}
        <Spacer /> La o alta masa cineva nu a terminat o partida de X0, dar cel
        mai ciudat lucru era tabla de sah care se afla pe o alta masa. Sub
        fiecare pion se aflau cateva litere care in combinatia corecta pareau sa
        formeze un cod. Langa tabla se mai afla si o formula matematica care nu
        prea are sens R = X+Y+Z.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter2/4">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter2/5">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
