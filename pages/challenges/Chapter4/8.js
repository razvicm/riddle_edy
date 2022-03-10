import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={18} />
      <Spacer />
      <Text h3>Capitolul 4</Text>
      <Spacer />
      <Text>Scoateti din plic indiciul E</Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter4/7">Inapoi</Link>
        <Link href="/challenges/Chapter4/9">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
