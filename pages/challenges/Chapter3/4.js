import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={29} />
      <Spacer />
      <Text h3>Capitolul 3</Text>
      <Spacer />
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/XADmowHso7c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>
        Cartus Parabellum de 9 mm
        <br />
        * munitie standard in majoritatea armelor de mana folosite de armata,
        trupele spetiale sau organele de securitate ba chiar si de echipajul
        flotei stelare.
        <br />* motivatia ucigasului este una personala deoarece a golit
        incarcatorul in victima.
        <br />* victima a avut o problema personala cu ucigasul.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter3/3">Inapoi</Link>
        <Link href="/challenges/Chapter3/5">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
