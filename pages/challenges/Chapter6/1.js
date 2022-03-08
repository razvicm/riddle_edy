import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={80} />
      <Spacer />
      <Text h3>Capitolul 6</Text>
      <Spacer />

      <Text>
        Inainte de a parasi planeta mai aveam o misiune foarte importanta.
        Naveta pe care gasisem era doar o naveta de imbarcare. Ea era conceputa
        doar sa transporte pasagerii de pe planeta la nava interstelara si
        invers, ea nu era conceputa sa parcurga distante mari in spatiu. Chiar
        in cele mai bune si optime conditii nu putea ajunge decat maxim 2 ani
        lumina. Cea mai apropiata planeta locuita se afla la 25 ani lumina. De
        aceea trebuia sa cautam sistemul de comunicare al navetei noastre care
        s-a desprins de naveta cand a acesta a intrat in contact cu atmosfera
        planetei. Trebuia sa o cautam si sa trimitem un mesaj SOS ca asteptam la
        cea mai apropiata poarta interstelara care se afla la circa 0.75 ani
        lumina de pozitia noastra.
      </Text>
    </>
  );
}

export default Chapter1;
