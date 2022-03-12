import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={42} />
      <Spacer />
      <Text h3>Capitolul 4</Text>
      <Spacer />

      <Text>
        Locatia urmatoare este: <b>Voievod</b>
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter4/1">Inapoi</Link>
        <Link href="/challenges/Chapter4/3">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
