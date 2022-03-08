import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={14} />
      <Spacer />
      <Text h3>Capitolul 3</Text>
      <Spacer />
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/QXIT8SzgAaY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>
        Bocanci militari
        <br />
        * destul de raspandit in armata, la echipe speciale, piloti ba chiar si
        la echipajul aerian.
        <br />
        * marimea 40/41
        <br />* proprietarul ori este o femeie cu piciorul mai mare ori un
        barbat cu piciorul mai mic.
      </Text>
    </>
  );
}

export default Chapter1;
