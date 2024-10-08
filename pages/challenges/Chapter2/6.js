import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={22} />
      <Spacer />
      <Text h3>Capitolul 2</Text>
      <Spacer />
      <Text>
        Avusesem dreptate, dupa ce am reusit sa rezolvam formula matematica cu
        ajutorul tablei de sah am aflat si parola pentru naveta. Usile s-au
        deschis si naveta mai avea destula energie pentru a porni bordul navei.
        Am aflat mai multe despre sistemul in care ne aflam. Planeta noastra era
        a doua planeta dintr-un sistem de 3 planete care inconjurau un sistem
        binar de stele care era compus dintr-o stea de dimensiunea soarelui si
        un pitic rosu. Cele 2 stele se roteau in jurul unui punct comun
        gravitational si pe langa asta in jurul unei stele albastre numita si
        gigant albastru. Din cauza asta, pe planeta nu apunea niciodata soarele,
        odata era vizibil gigantul albastru si odata sistemul binar de stele.
        <Spacer />
        Baza de minerit era destul de profitabila si crestea permanent pana in
        ziua in care s-a produs tragedia. In urma a iesit la iveala ca,
        culturile de ciuperci din pesterile apropiate, odata la 50 de ani,
        emiteau substante halucinogene care duceau in nebunie organismele care
        le inhalau. Persoanele devenisera sensibile la lumina si din cauza asta
        s-au retras in pesteri unde au devenit violenti si isi atacau colegii.
        Cadavrele ramase in urma hraneau urmatoarea generatie de ciuperci.
        Supravietuirorii si cei care au fost imuni fata de toxine au evacuat in
        masa planeta lasand in urma un oras fantoma.
        <Spacer /> Problema mare era ca incidentul s-a intamplat acum 50 de ani
        deci ciupercile puteau oricand emite din nou toxinele ucigase. Planeta
        trebuia parasita cat mai rapid, dar pentru asta trebuia mai intai sa fie
        gasit ucigasul.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter2/5">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter2/7">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
