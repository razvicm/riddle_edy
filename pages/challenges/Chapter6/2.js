import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={84} />
      <Spacer />
      <Text h3>Capitolul 6</Text>

      <Spacer />
      <Text>Scoateti din plic indiciile: B si V</Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter6/1">Inapoi</Link>
        <Link href="/challenges/Chapter6/3">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
