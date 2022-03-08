import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={7} />
      <Spacer />
      <Text h3>Capitolul 3</Text>
      <Spacer />
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/KBvMnuf7ZIo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>
        John Ezekiel <br />
        * testul ADN a aratat ca sangele e al reporterului.
        <br />
        * cadavrul nu este la locul faptei.
        <br />
        * ucigasul ori are un complice ori este destul de puternic sa duca
        cadavrul de la locul faptei.
        <br />
      </Text>
    </>
  );
}

export default Chapter1;
