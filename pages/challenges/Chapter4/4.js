import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={10} />
      <Spacer />
      <Text h3>Capitolul 4</Text>
      <Spacer />

      <Text>
        Am ajuns inapoi la baza noastra unde s-au adunat toti supravietuitorii.
        Avem o sarcina foarte importanta si urgenta. Trebuie sa gasim pe cineva
        care sa restaureze clipul deteriorat de pe notebook-ul jurnalistului,
        sperand ca acesta ne va livra informatii noi. Am inceput sa citesc din
        nou lista de pasageri si abilitatile lor.
      </Text>
    </>
  );
}

export default Chapter1;
