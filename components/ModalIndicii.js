import { Collapse, Modal, Text } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";
import React from "react";

export default function ModalIndicii({ visible, closeHandler }) {
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
      scroll
      blur
    >
      <Modal.Header>
        <Text b size={18}>
          Indicii
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Collapse.Group>
          <Collapse title="Q ">
            <Text>
              Este un indiciu care te ajuta sa intelegi de ce a ucis faptasul
            </Text>
          </Collapse>
          <Collapse title="C">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>Incearca sa iesi din labirint</Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>Uita-te cu atentie la drumul parcurs</Text>
              </Collapse>
              <Collapse title="Hint 3">
                <Text>
                  Raspunsul este <b>2 jos</b>
                </Text>
                <Image
                  src={"/imgIndicii/C.png"}
                  alt="logo"
                  width={500}
                  height={500}
                />
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="G">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>Nu este ceea ce pare</Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>
                  Raspunsul este <b>3 jos</b>
                </Text>
                <Image
                  src={"/imgIndicii/G.png"}
                  alt="logo"
                  width={500}
                  height={500}
                />
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="J">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>Cauta cuvintele: elf, arama, planeta, ceas</Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>Uita-te ce simboluri formeaza cuvintele gasite</Text>
              </Collapse>
              <Collapse title="Hint 3">
                <Text>
                  Raspunsul este <b>1 sus</b>
                </Text>
                <Image
                  src={"/imgIndicii/J.png"}
                  alt="logo"
                  width={500}
                  height={500}
                />
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="T">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>Uita-te cu atentie peste buletin</Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>
                  Raspunsul este <b>4 sus</b>
                </Text>
                <Image
                  src={"/imgIndicii/T.png"}
                  alt="logo"
                  width={500}
                  height={300}
                />
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="A/A1">
            <Text>Ajutor pentru a rezolva indiciul S</Text>
          </Collapse>
          <Collapse title="S">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>
                  Raspunde la intrebarea: Ce lipseste de pe masa? (ia in
                  considerare si descrierea despre continutul unui joc de
                  rummy).
                </Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>Uita-te cu care litera se poate combina piesa lipsa</Text>
              </Collapse>
              <Collapse title="Hint 3">
                <Text>
                  {" "}
                  Raspunsul este <b>F5</b>. <br />
                  De pe masa lipseste 5-ul rosu iar pe hartie litera F este de
                  culoarea rosie.
                </Text>
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="M">
            <Text>Ajutor pentru a rezolva indiciul Z</Text>
          </Collapse>
          <Collapse title="Z">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>Cauta asemanarile de pe M si Z</Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>
                  Ce forme se vad daca hasurezi sticlele asemanatoare?
                </Text>
              </Collapse>
              <Collapse title="Hint 3">
                <Text>
                  Raspunsul este <b>F6</b>
                </Text>
                <Image
                  src={"/imgIndicii/Z.png"}
                  alt="logo"
                  width={500}
                  height={500}
                />
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="R">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>Castiga jocul si gaseste raspunsul</Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>
                  Raspunsul este D8 fiindca aceea este singura mutare care te
                  ajuta sa castigi jocul tura urmatoare.
                </Text>
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="O">
            <Text>
              Iti indica in ce ordine trebuie sa iei coordonatele din R, S, Z
            </Text>
          </Collapse>
          <Collapse title="L/L1">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>
                  Ia coordonatele (R S Z), uita-te ce pion este pe tabla si din
                  L1 alege silaba potrivita
                </Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>
                  Raspunsul este <b>pegasus</b>
                </Text>
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="I">
            <Text>
              Ajuta la descifrarea anumitor coduri si simboluri ce apar pe
              parcursul jocului.
            </Text>
          </Collapse>
          <Collapse title="K">
            <Text>
              Buletinul jurnalistului contine informatii ce iti sunt necesare
              pentru rezolvarea ghicitorii W.
            </Text>
          </Collapse>
          <Collapse title="W">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>
                  In prima linie trebuie trecut adresa din buletinul
                  jurnalistului.
                </Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>
                  Sub fiecare litera se afla un numar. Numerele din randurile de
                  jos trebuie inlocuite cu aceste litere.
                </Text>
              </Collapse>
              <Collapse title="Hint 3">
                <Text>
                  Raspuns: <br /> Cheie <b>terrbform</b> <br />
                  Seit <b>bombon</b>
                </Text>
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="D">
            <Text>Contine informatii necesare pentru a rezolva F.</Text>
          </Collapse>
          <Collapse title="F">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>
                  Cu ajutorul indiciului I trebuie sa gasesti cele 4 litere ce
                  reprezinta timbrele.(uita-te la pozitia corpului fiecarui
                  atlet).
                </Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>
                  Din poveste poti deduce in ce ordine urmeaza fiecare timbru pe
                  care se afla un nume.
                </Text>
              </Collapse>
              <Collapse title="Hint 3">
                <Text>
                  Raspuns: literele sunt L, F, U, V <br />
                  Ordinea este: Alex(U), Martin(L), Philip(V), Theodor(F) <br />
                  Acum, pentru fiecare rand avem litera de pornire la care
                  adaugam si scadem numerele.
                  <br />
                  Mesajul final este: <b>Urmatoarea locatie valea fiearelor</b>.
                </Text>
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="E">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>
                  Trebuie sa identifici elementul chimic pentru fiecare
                  material. Pentru asta cauta elemntele chimice de pe
                  ghicitorile anterioare.
                </Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>
                  galben - sulf
                  <br /> portocaliu - dioxidul de sulf
                  <br /> rosu - trioxidul de sulf
                  <br /> gri - oxid de vanadiu
                  <br /> albastru - apa
                  <br /> verde - acid sulfuric
                  <br /> Acum trebuie doar sa urmaresti reteta din descriere si
                  vei afla cuvantul cheie.
                </Text>
              </Collapse>
              <Collapse title="Hint 3">
                <Text>
                  Raspuns: fiecare element are o litera aparte din care trebuie
                  sa scazi si sa adaugi numere adica schimbi locul in alfabet
                  dupa grilajul de pe pagina(starea elementului, in ce recipient
                  se afla si cu ce intra in contact). <br /> Cuvantul cheie este
                  <b>bismut</b>.
                </Text>
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="P">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>
                  Intra in labirint conform descrierii si parcurge toate
                  traseele posibile.
                </Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>
                  La fel ca si la celalalt labirint, calea parcursa iti indica
                  un mesaj secret.
                </Text>
              </Collapse>
              <Collapse title="Hint 3">
                <Text>
                  Raspunsul este <b>LOC 435</b>
                </Text>
                <Image
                  src={"/imgIndicii/P.png"}
                  alt="logo"
                  width={500}
                  height={500}
                />
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="Y">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>Cauta mesajul secret printre randuri.</Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>
                  Cu ajutorul indiciului I poti descifra mesajul scris in codul
                  Morse.
                </Text>
              </Collapse>
              <Collapse title="Hint 3">
                <Text>
                  Raspuns: mesajul este <b>montana</b>
                </Text>
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="B/V">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>
                  Cu ajutorul indiciului I trebuie sa afli cu ce simbol
                  corespunde fiecare linie de pe V.
                </Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>
                  Simbolurile descifrate de pe V arata directii geografice pe
                  harta de pe B (N S E V).
                </Text>
              </Collapse>
              <Collapse title="Hint 3">
                <Text>
                  Raspuns: daca pornesti pe harta de pe X si parcurgi traseul
                  marcat pe V (fiecare bara arata directia si numarul de
                  deasupra pasii) literele formeaza cuvantul calea lactee
                </Text>
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="N">
            <Text>Arata fiecare simbol ce logo este.</Text>
          </Collapse>
          <Collapse title="H">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>
                  Conform indiciului I, fiecare nota muzicala corespunde unei
                  litere din alfabet.
                </Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>
                  Raspunsul este: <br />
                  triunghi - AMD <br />
                  cerc - Windows <br />
                  patrat - Huawei <br />
                  sfera - Xiaomi <br />
                  dreptunghi - IBM <br />
                  romb - Android <br />
                  trapez - Apple <br />
                  hexagon - Intel
                  <br />
                </Text>
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="X">
            <Text>Arata fiecare procesor carei litere corespunde.</Text>
          </Collapse>
          <Collapse title="U">
            <Collapse.Group>
              <Collapse title="Hint 1">
                <Text>
                  Ca sa gasesti numarul final, trebuie sa combini 3 bucati de
                  numar digital pe care le detii.
                </Text>
              </Collapse>
              <Collapse title="Hint 2">
                <Text>
                  In text gasesti o descriere foare precisa a trei simboluri.
                  Daca reusesti sa descifrezi simbolurile cu indiciul I, vei
                  gasi literele care iti lipsesc.
                </Text>
              </Collapse>
              <Collapse title="Hint 3">
                <Text>
                  Raspuns: cele trei simboluri ascund literele A,F si H. <br />
                  Cu ajutorul lui X si N aflam ca procesoarele cautate sunt AMD,
                  Android si Intel.
                  <br />
                  Din nota muzicala aflam ca Amd este triunghi, Android este
                  romb si Intel este hexagon.
                  <br />
                  Daca combinam cele 3 forme geometrice primim numarul:{" "}
                  <b>421 </b>
                </Text>
              </Collapse>
            </Collapse.Group>
          </Collapse>

          {/* end collapse */}
        </Collapse.Group>
      </Modal.Body>
    </Modal>
  );
}
