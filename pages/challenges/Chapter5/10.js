import {
  Progress,
  Spacer,
  Text,
  Radio,
  Input,
  Button,
  Link,
} from "@nextui-org/react";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={15} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />
      Scoate din plic indiciul Y.
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter5/9">Inapoi</Link>
        <Link href="/challenges/Chapter5/11">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
