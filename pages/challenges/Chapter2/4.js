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
        Dupa o scurta cautare si folosindu-ne de hartile pe care le aveam, am
        reusit sa gasim intrarea minei. In apropiere se afla o nava lasata in
        urma, dar inca functionala la prima vedere. Acesta ar fi putea fi calea
        noastra de a parasi aceasta lume ostila.
        <br /> Singura problema este ca intrarea in nava este blocata cu un
        sistem de securitate care necesita un cod de acces pe care nu il stim.
        Daca intram cu forta in nava riscam distrugerea sau deteriorarea
        acesteia. Trebuie sa gasim parola si pentru asta am inceput sa cercetam
        baza si locatile minerilor.
        <br /> Din ce am gasit se vede ca baza a fost parasita dintr-un oarecare
        motiv destul de rapid si aproape haotic. Dar totusi am gasit ceva
        indicii care ne pot ajuta la gasirea parolei cautate.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter2/3">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter2/4a">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
