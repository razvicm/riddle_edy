import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h3>Bad Ending</Text>
      <Spacer />
      <Text>
        Dupa ce am citit informatia care era de necrezut, am auzit un sunet
        asurzitor si am simtit o durere de cap. O voce din interiorul meu a
        inceput sa vorbeasca cu un ton ironic si razand. In sfarsit a venit
        timpul sa ne cunoastem si personal. Da, stiu ca esti socat si zici ca
        sunt un monstru dar crede-ma ca am facut totul pentru binele tau. Daca
        ma intrebi daca eu sun Headshot?! Raspunsul este da, eu sunt. Dupa
        accident ai avut multi dusmani de care nu ai vrut sau nu ai putut sa te
        ocupi, de aceea trebuia sa preiau eu controlul. Ok si dupa aceea au
        murit si cativa nevinovati ca ma plictisisem si voiam un pic de actiune.
        Nimeni nu te-a pus sa preiei o munca asa plictisitoare. Dar cand
        autoritatile au aflat cine este ucigasul trebuia cat se poate de rapid
        parasit sistemul. Nu spune ca nu iti mai amintesti de ziua plecarii cand
        ai luat locul colegului care avea o misiune in sistemul Tango. Pe
        motivul ca s-a imbolnavit si te-a rugat sa ii preiei locul. Desigur, in
        realitate zacea in baia lui cu un glont in cap. Planul era simplu,
        trebuia parasita planeta cu o nava mica care s-a putut strecura prin
        granita planetei inainte ca totul sa fie izolat. Chiar daca am reusit sa
        scapam pana ajungeam la destinatie, autoritatile locale ne asteptau
        deja. Dar daca la jumatatea drumului am reduce scutul navei la jumatate
        atunci era numai o chestiune de timp pana ce un accident minor sa ne
        oblige sa coboram pe o planeta in apropiere, deci in final nimeni nu mai
        stia unde suntem. Dupa prabusire s-au ivit cateva probleme
        neprevazute... inginerul de bord a aflat ca cineva a manipulate scutul,
        deci trebuia sa dispara. Iar jurnalistul care a prins o parte din
        transmisia despre Headshot era un factor de risc, plus era si un parazit
        care traia pe spatele problemelor altora. Sharon era intradevar
        nevinovata dar si-a bagat nasul unde nu trebuia.
        <br /> Ce m-a bucurat este faptul ca desi nu ai avut dovezi foarte
        clare, ai ucis fara scrupule un nevinovat . Asadar, chiar daca
        neintentionat, ai ales calea mea, de pe care nu mai ai sanse de
        intoarcere. De acum ai numai doua posibilitati, ori te sacrifici pe tine
        insuti ori pe ceilalti din nava pentru a putea continua misiunea
        inceputa de mine acum cativa ani.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/BadEnding/2">
          <Link>Inapoi</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
