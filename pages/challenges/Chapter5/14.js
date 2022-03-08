import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={15} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />
      <Text>
        <Text b> Autopsia:</Text>
        <Radio.Group onChange={(e) => console.log(e)}>
          <Radio value="A">
            <Text>
              Sharon a murit pe loc dupa ce a fost doborata de glontul
              ucigasului.
            </Text>
          </Radio>
          <Radio value="B">
            <Text>
              Sharon a murit doar dupa cateva minute dupa ce a fost impuscata.
            </Text>
          </Radio>
          <Radio value="C">
            <Text>Sharon mai era in viata cand a fost gasita</Text>
          </Radio>
        </Radio.Group>
        <Spacer />

        <Text b> Scrisoarea </Text>
        <Radio.Group onChange={(e) => console.log(e)}>
          <Radio value="A">
            <Text>Ucigasul este un barbat</Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>Ucigasul este o femeie</Text>
          </Radio>
          <Radio value="C">
            <Text>Ucigasul are de-a face cu Headshot</Text>
          </Radio>
        </Radio.Group>
        <Spacer />
        <Text b> Cartus </Text>
        <Radio.Group onChange={(e) => console.log(e)}>
          <Radio value="A">
            <Text>Cartusul provine dintr-un sniper militar</Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>Cartusul provine dintr-un pistol normal</Text>
          </Radio>
          <Radio value="C">
            <Text>Cartusul provine dintr-un pump-gun</Text>
          </Radio>
        </Radio.Group>
        <Spacer />
        <Text b> Firele de par </Text>
        <Radio.Group onChange={(e) => console.log(e)}>
          <Radio value="A">
            <Text>Firele nu au nimic de-a face cu crima</Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>
              Fry este ucigasul deoarece s-au gasit firele ei de par la locul
              faptei{" "}
            </Text>
          </Radio>
          <Radio value="C">
            <Text>
              Cu firele de par a lui Fry a reusit ucigasul sa deschida seiful
              unde se tineau armele
            </Text>
          </Radio>
        </Radio.Group>
        <Spacer />
        <Text b> Pozitia tragatorului </Text>
        <Radio.Group onChange={(e) => console.log(e)}>
          <Radio value="A">
            <Text>
              Pozitia, conditiile meteorologice si distanta plus faptul ca
              Sharon era doborata cu un singur glont arata ca ucigasul este
              profesionist in folosirea aceste tip de arma.
            </Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>
              Ucigasul a avut mare noroc ca a putut-o impusca pe Sharon.
            </Text>
          </Radio>
          <Radio value="C">
            <Text>
              Sharon a fost impuscata dintr-un alt loc ,dupa care indiciile au
              fost aduse aici cpentru a induce detectivii in eroare.
            </Text>
          </Radio>
        </Radio.Group>
        <Spacer />
      </Text>
      <Spacer />
    </>
  );
}

export default Chapter1;
