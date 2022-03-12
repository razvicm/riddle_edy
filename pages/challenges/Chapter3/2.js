import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={27} />
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
        Jhon Ezekiel <br />
        * testul ADN a aratat ca sangele e al reporterului.
        <br />
        * cadavrul nu este la locul faptei.
        <br />
        * ucigasul ori are un complice ori este destul de puternic sa duca
        cadavrul de la locul faptei.
        <br />
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter3/1">Inapoi</Link>
        <Link href="/challenges/Chapter3/3">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
