import {
  Progress,
  Spacer,
  Text,
  Radio,
  Input,
  Button,
  Link,
} from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={36} />
      <Spacer />
      <Text h3>Capitolul 3</Text>
      <Spacer />
      <Text>
        Dupa ce am introdus parola corecta notebook-ul jurnalistului s-a
        deschis. Pe langa documente si materiale privat avea trei lucruri foarte
        interesante pe dispozitiv: Un reportaj inceput despre ucigasul in serie
        numit de jurnalisti “Head Shot” deoarece cu un singur foc de arma isi
        ucidea victima si de obicei le impusca in cap. <br /> Pot sa zic ca el
        era momentan cel mai cautat om in galaxie. Pe langa reportajul scris mai
        era si un clip scurt aparent transmis in ziua plecarii noastre din
        Sistemul Triaj. Materialul video era destul de avariat, dar reiesea din
        el ca ucigasul a fost identificat si acum este pe fuga. <br />
        Din pacate partea unde este divulgate numele acestuia este avariata si
        nu putem afla identitatea ucigasului. Intr-un alt document prietenul
        nostru descrie in detaliu aterizarea noastra pe aceasta planeta, care nu
        a fost chiar fara problema. Din cauza avariilor, nava nu a intrat in
        unghiul potrivit in atmosfera si din cauza asta era foarte posibil sa
        explodeze inainte de a ajunge solul. Copilotul a incercat sa schimbe
        unghiul navei desprinzand partea din spate a acesteia, care s-a prabusit
        necontrolat catre sol. Aceasta a adus modificarea dorita dar unghiul
        inca nu era corespunzator. <br />
        Atunci copilotul a luat decizia sa desprinda si partea a navei unde se
        aflau pasagerii.Pasagerii ii pot multumi inginerului de bord care a
        facut manevra de decuplare inposibila, obligand astfel pilotul sa caute
        o alta posibilitate de aterizare.Oare ce s-ar fi intamplat daca Oven nu
        ar fi reactionat? Pentru asa un secret ar fi cineva dispus sa si ucida?
        ! In ultimul document il vedem pe Jones cum in ascuns consuma substante
        interzise si este surprins de o camera de supraveghere. Pare o persoana
        la care moartea face parte din viata de zi cu zi si uciderea este o
        unelta ce o foloseste destul de des. Oare cata retinere avea asa o
        persoana sa ucida pe cineva care este pe cale sa dezvaluie un secret
        care i-ar putea distruge cariera!? <br />
        Totusi cel mai dezgustator a fost ca sub fiecare articol se afla o suma
        de bani cel mai probabil suma care trebuia platit de victima sau de
        redactie pentru a ajunge la informatia necesara. Omul nostru este un
        santajist profesionist cu multi dusmani nefiind de mirare ca a fost
        lichidat.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter3/9">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter3/11">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
