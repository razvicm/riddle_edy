import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
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
        indicii care ne pot ajuta la gasirea parolei cautate. <br />
        In cantina se gaseste un bar cu un raft cu sticle de alcool. Pe masa
        este o bucata de hartie pe care este vizibila comanda din ultimele zile.
        Dar cum il analizam mai in detaliu devine tot mai clar ca ascunde un cod
        pe care inca nu il intelegem. Pe o masa din apropiere este un joc de
        rummy inca neterminat cu o notita de pe care aparent lipseste ceva.
        Foarte interesant. <br /> La o alta masa cineva nu a terminat o partida
        de X0, dar cel mai ciudat lucru era tabla de sah care se afla pe o alta
        masa. Sub fiecare pion se aflau cateva litere care in combinatia corecta
        pareau sa formeze un cod. Langa tabla se mai afla si o formula
        matematica care nu prea are sens R = X+Y+Z.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter2/3">Inapoi</Link>
        <Link href="/challenges/Chapter2/5">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
