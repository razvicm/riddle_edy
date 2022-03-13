import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={94} />
      <Spacer />
      <Text h3>Capitolul 6</Text>
      <Spacer />
      <Text>
        Cum ne aflasem in pozitie inalta, cu putin noroc am reusit sa gasim
        rapid locul transmitatorului. Ajunsi la fata locului ne-am dat seama ca
        acesta a fost deteriorat in timpul prabusirii si trebuie reparat inainte
        de a trimite un mesaj. Rapid am gasit o descriere destul de ciudata cum
        se poate repara dispozitivul si ce componente trebuie schimbate.
        Descrierea suna in felul urmator: Pentru a repune in functie, trebuie sa
        fie verificate si schimbate trei procesoare si anume: mai jos erau
        notate trei simboluri pe care le-am mai vazut undeva dar nu imi mai
        aduceam aminte unde. Fiecare simbol era compus din trei randuri iar
        fiecare rad avea loc de doua puncte.
        <br /> In primul Simbol: • in primul rand punctul alb se afla pe partea
        dreapta • in al doilea rand erau vizibile ambele puncte albe • si in al
        treilea rand erau vizibile ambele puncte
        <br />
        Simbolul doi: • in primul rand nu este vizibil niciun punct alb • in
        randul doi punctul alb se afla pe partea dreapta • in randul trei ambele
        puncte albe sunt vizibile <br />
        Simbolul trei: • in primul rand rand punctul alb se afla pe partea
        dreapta • in al doilea rand nu este vizibil nici un punct alb • si in al
        treilea rand erau vizibile ambele puncte
        <br /> Sub cele trei simboluri se afla ochiul lui Horus, un simbol
        egiptean cu care daca nu ma insel m-am mai intalnit de multe ori in
        calatoria noastra. Dupa ce procesoarele au fost schimbate ,trebuie doar
        sa repornesti sistemul introducand un cod din 3 cifre.
        <br /> Pe langa descrierea detaliata cum se schimba procesorul, am mai
        gasit si alte indicii si obiecte in apropiere. O schita cu mai multe
        tipuri de procesoare si pe fiecare era o litera din alfabet. Pe langa
        acestea, o nota muzicala cu care nu prea stiam ce trebuie facut si cum
        ne poate ajuta o melodie la problema noastra. In final erau mai multe
        hartii pe care se aflau forme geometrice si sub ele o bucata dintr-un
        numar digital.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter6/6">Inapoi</Link>
        <Link href="/challenges/Chapter6/8">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
