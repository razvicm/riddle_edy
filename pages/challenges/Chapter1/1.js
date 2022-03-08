import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={5} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/zPNNn6xbn8c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>
        Am ajuns si la ultimul loc din zona aterizarii unde inca nu am verificat
        daca se afla inginerul de bord George Oven. Era o bucata destul de mare
        care s-a rupt din nava la aterizare. La prima vedere totul era in ordine
        dar linistea era prea mare. Dupa ce am intrat inauntru am dat peste o
        dezordine totala si aproape ca nu se vedea nimic. Singurele surse de
        lumina erau un monitor spart care aparent mai functiona si niste cabluri
        din care ieseau scantei. Chiar si asa, repede ne-am dat seama ca in
        locul acesta s-a produs o crima. Oven era intins fara suflare pe podea,
        aparent strangulat.
        <Spacer />
        Indiciile din bord:
        <Spacer />
        <Text>
          <Text b> Biletul din buzunar</Text>
        </Text>
        <Radio.Group onChange={(e) => console.log(e)}>
          <Radio value="A">
            <Text>
              Ovens a aflat ca cineva s-a logat ilegal la bordul navei si pentru
              asta trebuia sa moara.
            </Text>
          </Radio>
          <Radio value="B">
            <Text>Biletelul nu are nimic de-a face cu moarte inginerului.</Text>
          </Radio>
          <Radio value="C">
            <Text>
              Cineva a lasat informatia asta in buzunarul mortului pentru a duce
              in eroare investigatorii.
            </Text>
          </Radio>
        </Radio.Group>
      </Text>
      <Spacer />
      <Text>
        <Text b> Autopsia </Text>
        <Radio.Group onChange={(e) => console.log(e)}>
          <Radio value="A">
            <Text>Ovens a fost strangulat fara sa opuna rezistenta.</Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>
              Ovens a fost surprins de ucigas, dar inainte sa fie ucis si s-a
              luptat pentru viata lui. Drept urmare ucigasul stiia ce face si
              era mai puternic si mai antrenat decat victima.
            </Text>
          </Radio>
          <Radio value="C">
            <Text>
              Inafara de faptul Ovens a fost strangulat nu am reusit sa aflam
              mai multe detalii despre ucigas.
            </Text>
          </Radio>
        </Radio.Group>
        <Spacer />
        <Text b> ADN </Text>
        <Radio.Group onChange={(e) => console.log(e)}>
          <Radio value="A">
            <Text>Sangele apartinei unui animal.</Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>Mostra nu este sange.</Text>
          </Radio>
          <Radio value="C">
            <Text>
              Mostra este contaminta din cauza asta va dura o perioada pana ce
              se poate recrea profilul ADN.
            </Text>
          </Radio>
        </Radio.Group>
        <Spacer />
        Dupa ce am reusit sa aflam combinatia de logare in bordul navei, ne-am
        reintors la punctul de plecare ca sa informam lumea ca intre noi se afla
        un ucigas. Din cutia neagra a navei nu am reusit sa scoatem informatii
        foarte utile, dar macar am putut descarca lista pasagerilor si un scurt
        istoric despre fiecare.
        <Spacer />
        Lista pasagerilor:
      </Text>
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
            Jhone Ezekiel: 36 ani, jurnalist, a terminat Jurnalismul, se
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
    </>
  );
}

export default Chapter1;
