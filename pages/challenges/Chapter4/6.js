import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={15} />
      <Spacer />
      <Text h3>Capitolul 4</Text>
      <Spacer />
      <Text>
        Dupa ce Sharon s-a apucat de treaba, impreuna cu restul pasagerilor va
        trebui sa ducem rezervoarele cu antimaterie din nava la nava minerilor
        cu care vom parasi planeta. Antimateria era depozitata in cilindri
        metalici in care era creat un camp electromagnetic care nu lasa alt
        material sa intre in contact cu antimateria. Cilindri aveau propria
        sursa de energie care permitea transportarea lor, dar ca sa evitam o
        explozie uriasa datorita unei interferente in circuitul electric aveam
        nevoie de o baterie de rezerva. Pentru o baterie externa aveam toate
        componentele si materialele la indemana, mai putin acidul sulfuric care
        trebuia produs de noi. Din computer am descarcat rapid o reteta. Acum
        trebuie doar sa prepare acidul.
      </Text>
    </>
  );
}

export default Chapter1;
