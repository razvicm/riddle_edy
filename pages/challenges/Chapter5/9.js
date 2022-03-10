import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import { navigationStyles } from "../../../components/utils";

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
        src="https://www.youtube.com/embed/_C3NHqQ5Cys"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>
        * Rana de pe spate se afla in zona vertebrei a 5-a <br />
        * Rana de iesire a goltului sub sanul drept.
        <br />
        * Glontul a trecut si prin inima cauzand leziuni majore, care au dus la
        stop cardiac.
        <br />
        * Traiectoria glontului duce la concluzia ca lunetistul se afla intr-un
        punct inalt.
        <br />* Moartea a fost cauzata de leziunile interne provocate de
        proiectil.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter5/8">Inapoi</Link>
        <Link href="/challenges/Chapter5/10">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
