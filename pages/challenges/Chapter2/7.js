import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import { navigationStyles } from "../../utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={15} />
      <Spacer />
      <Text h3>Capitolul 2</Text>
      <Spacer />
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/zFb9HN3dEMw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter2/6">Inapoi</Link>
        <Link href="/challenges/Chapter2/8">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
