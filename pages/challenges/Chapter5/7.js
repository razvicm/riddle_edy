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
        intr-o balta de sange impuscata din spate. Aparent a incercat sa fuga de
        criminal.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter5/6">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter5/8">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
