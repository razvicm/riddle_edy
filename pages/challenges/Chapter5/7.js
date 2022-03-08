import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={15} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      Indiciile din bord:
      <Spacer />
      <Text>
        <Text b> Biletul din buzunar</Text>
      </Text>
      <Text>
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
        <Spacer />

        <Text b> Autopsia </Text>
        <Radio.Group onChange={(e) => console.log(e)}>
          <Radio value="A">
            <Text>Ovens a fost strangulat fara sa opuna rezistenta.</Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>
              Ovens a fost surprins de ucigas, dar inainte sa fie ucis s-a
              luptat pentru viata lui. Drept urmare ucigasul stia ce face si era
              mai puternic si mai antrenat decat victima.
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
      </Text>
      <Spacer />
    </>
  );
}

export default Chapter1;
