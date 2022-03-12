import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={8} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      <Text>
        {" "}
        Verificati indiciul Q. Cineva a intrat in sistemul navei neautorizat.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter1/5">Inapoi</Link>
        <Link href="/challenges/Chapter1/7">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
