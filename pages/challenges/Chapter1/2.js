import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import { navigationStyles } from "../../utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={2} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/zPNNn6xbn8c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>
        Am verificat locul crimei si am gasit cateva indicii interesante.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter1/1">Inapoi</Link>
        <Link href="/challenges/Chapter1/3">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
