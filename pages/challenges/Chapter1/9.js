import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import { navigationStyles } from "../../utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={15} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      Lista pasagerilor:
      <ul style={{ listStyle: "disc" }}>
        <li>
          <Text>
            Abu “Imam” al- Walid: 50 de ani, preot imam, calatoreste spre New
            Mecca, este liderul grupului musulman care calatoreste cu el.
          </Text>
        </li>
        <li>
          <Text>
            Ali 8 ani, calatoreste cu grupul musulman, destinatia New Mecca.
          </Text>
        </li>
        <li>
          <Text>
            Boss Jones: 55 ani, avocat, studii de Drept, se deplaseaza spre
            Sistemul Detroit la un client condamnat. Nu a supravietuit
            aterizarii.
          </Text>
        </li>
        <li>
          <Text>
            Carolin Fry: 29 ani, copilot, are instruire militara de baza si
            instruire si experienta in pirotehnica.
          </Text>
        </li>
        <li>
          <Text>
            Diaz: 41 ani, soldat la trupele speciale, are un antrenament militar
            profesionist in spate, face parte din echipa lui William J. Nu a
            supravietuit aterizarii.
          </Text>
        </li>
        <li>
          <Text>
            George Ovens: 52 ani, inginer de bord, a absolvit un curs militar de
            baza si are studii tehnice.
          </Text>
        </li>
        <li>
          <Text>
            Hassan: 11 ani, calatoreste cu grupul musulman, destinatia New
            Mecca.
          </Text>
        </li>
        <li>
          <Text>
            Jack: 17 ani, se deplaseasa spre Sistemul Tango, cel mai probabil
            este o fata deghizata ca barbat, nu detinem alte informatii.
          </Text>
        </li>
        <li>
          <Text>
            Jhon Ezekiel: 36 ani, jurnalist, a terminat Jurnalismul, se
            deplaseasa spre Sistemul Sigma, formeaza un cuplu cu Sharon.
          </Text>
        </li>
        <li>
          <Text>
            Paris P. Oglivie: 50 ani, colectionar antichitati, a absolvit
            arheologie, calatoreste in Sistemul Andromeda, cel mai probabil face
            contrabanda intre planete.
          </Text>
        </li>
        <li>
          <Text>
            Richard B. Ridick si trupa sa de detectivi: 34 ani, detectiv,
            experienta militara (fost commandant al unei echipe speciale),
            calatoreste in Sistemul Tango.
          </Text>
        </li>
        <li>
          <Text>
            Santanas Gefangene: 25 ani, model, calatoreste in Sistemul Nebula.
            Nu a supravietuit aterizarii.
          </Text>
        </li>
        <li>
          <Text>
            Sharon: 27 ani, programator, studii technice si de informatica, este
            intr-o relatie cu jurnalistul.
          </Text>
        </li>
        <li>
          <Text>
            Suleiman: 14 ani, calatoreste cu grupul musulman, destinatia New
            Mecca.
          </Text>
        </li>
        <li>
          <Text>
            Cpt Tom Mittchel: 53 ani, capitanul navei spatiale, nu a
            supravietuit aterizarii.
          </Text>
        </li>
        <li>
          <Text>
            Vaako: 34 ani, soldat la trupele speciale, are un antrenament
            militar profesionist in spate, face parte din echipa lui William J.
            Nu a supravietuit aterizarii.
          </Text>
        </li>
        <li>
          <Text>
            William J. Johns: 33 ani, commandant la trupele speciale, are un
            antrenament militar profesionist in spate, este instruit sa
            foloseasca orice arma de foc si expert in arte martiale. Calatoreste
            cu echipa sa intr-un loc necunoscut.
          </Text>
        </li>
      </ul>
      <Text>
        Parola pentru capitolul 2 este: <b>electricitate</b>.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter1/8">Inapoi</Link>
        <Link href="/challenges/Chapter1/10">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
