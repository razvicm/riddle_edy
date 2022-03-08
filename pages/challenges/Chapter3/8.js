import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={18} />
      <Spacer />
      <Text h3>Capitolul 2</Text>
      <Spacer />
      <Text>
        Dupa ce am analizat tot locul si am notat toate indicile am verificat si
        geanta care era langa groapa, in care am gasit o tableta. Aceasta era
        blocata cu un cod. Trebuia neaparat sa aflam codul.
        <Spacer />
        Scoateti din plic indiciile W si K.
      </Text>
    </>
  );
}

export default Chapter1;
