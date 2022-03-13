import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={69} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />
      <Text>
        Cu ajutorul hartii digitale facute de dronele noastre, destul de rapid
        am reusit sa gasim locul crimei. A treia victima era Sharon, care zacea
        intr-o balta de sange impuscate din spate aparent a incercat sa fuga de
        criminal.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter5/6">Inapoi</Link>
        <Link href="/challenges/Chapter5/8">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
