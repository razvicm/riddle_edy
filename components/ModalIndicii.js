import { Collapse, Modal, Text } from "@nextui-org/react";
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
              Este un indiciu care te ajuta sa inteleg de ce a ucis faptasul
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
                <Text>Raspunsul este 2 jos</Text>
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
                <Text>Raspunsul este 3 jos</Text>
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
                <Text>Raspunsul este 1 sus</Text>
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
                <Text>Raspunsul este 4 sus</Text>
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
                  Raspunsul este F5. <br />
                  De pe masa lipseste 5-ul rosu iar pe hartie litera F este de
                  culoarea rosie.
                </Text>
              </Collapse>
            </Collapse.Group>
          </Collapse>
          <Collapse title="M">
            <Text>Ajutor pentru a rezolva indiciul Z</Text>
          </Collapse>

          {/* end collapse */}
        </Collapse.Group>
      </Modal.Body>
    </Modal>
  );
}
