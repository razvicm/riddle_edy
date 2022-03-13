import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={34} />
      <Spacer />
      <Text h3>Capitolul 3</Text>
      <Spacer />
      <Text>
        Dupa ce am analizat tot locul si am notat toate indicile am verificat si
        geanta care era langa groapa, in care am gasit o tableta. Aceasta era
        blocata cu un cod. Trebuia neaparat sa aflam codul.
        <Spacer />
        Scoateti din plic indiciile W si K.
        <Spacer />
        Dupa ce ati descoperit codul, puteti merge mai departe.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter3/7">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter3/9">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
