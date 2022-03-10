import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={10} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/djF3y-oSRtY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>Scoateti din plic indiciul P.</Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter5/3">Inapoi</Link>
        <Link href="/challenges/Chapter5/5">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
