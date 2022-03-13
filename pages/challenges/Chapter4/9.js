import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={55} />
      <Spacer />
      <Text h3>Capitolul 4</Text>
      <Spacer />

      <Text>
        Pentru a prepara acid sulfuric in primul rand trebuie sa pui materialul
        galben care este in stare solida intr-un recipient inchis. Recipientul
        trebuie incalzit pana cand materialul galben incepe sa se evapore.
        Materialul portocaliu se afla in recipientul doi in stare gazoasa si
        este in continuare incalzit. Materialul portocaliu intra in contact cu
        O2 care este administrat dintr-un alt recipient. Materialul rosu este
        creat in vasul trei in forma gazoasa si este incalzit in continuare.
        Pentru a mari randamentul si grabi reactia chimica, gazul(material rosu)
        intra in contact cu materialul gri care are rolul de catalizator. In
        recipientul 4 se afla materialul gri in forma solida si care este dozat
        cum este necesar. Cand materialul gri intra in contact cu gazul
        fierbinte grabeste reactia care normal ar fi una lenta. In recipientul
        cinci se afla material albastru in forma lichida care este administrat
        prin picurator in recipientul care se afla sub el si in care este deja o
        portie de material verde. Materialul verde intra in contact cu gazul si
        asa se formeaza si mai mult material verde.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter4/8">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter5/1">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
