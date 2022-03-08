import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={15} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/Z7nyGj9TmLI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>
        * Cartus 7.68 x 50 mm.
        <br /> * Este un glont standard in foarte multe pusti de lunetist.
        <br /> * Cum numai un cartus a fost gasit la fata locului dovedeste ca
        tragatorul este un profesionist cu o asemenea arma.
        <br />
      </Text>
      <Spacer />

      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/31MX5K9pK_4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>
        Carolyn Fry <br />
        * ADN- ul arata ca parul apartine copilotului. <br />
        * Asta ar putea dovedi cum a deschis ucigasul dulapul de arme. <br />*
        Totusi intrebarea ramane daca Fry este cel care a tras sau firul de par
        a fost lasat ca si o urma falsa !?
      </Text>
      <Spacer />

      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/N6Og_TBsBxE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>
        * distanta: 503 metri
        <br />
        * puterea vantului : 35 km/h
        <br />
        * unghiul tragerii: 43,2 °<br />
        In acesti parametri sa nimeresti si sa ucizi o tinta miscatoare cu o
        singura lovitura dovedeste profesionalism. Dar se poate ca omul nostru a
        avut doar noroc.
      </Text>
      <Spacer />
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/WCCnFEpyz_o"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

export default Chapter1;
