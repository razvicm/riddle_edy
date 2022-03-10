import {
  Progress,
  Spacer,
  Text,
  Radio,
  Input,
  Button,
  Link,
} from "@nextui-org/react";
import { navigationStyles } from "../../utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={15} />
      <Spacer />
      <Text h3>Capitolul 3</Text>
      <Spacer />
      <Text>Puteti pune deoparte indiciile K, D, F</Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter3/10">Inapoi</Link>
        <Link href="/challenges/Chapter4/1">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
