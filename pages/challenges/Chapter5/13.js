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
      <Progress color="primary" value={77} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />
      <Text>
        Nu dupa mult timp am gasit si locul de unde a fost impuscata Sharon.
        Nici aici nu am gasit prea multe indicii, doar un singur cartus de glont
        de lunetist si cateva fire de par blonde.
      </Text>
      <div style={navigationStyles}>
        <Link href="/challenges/Chapter5/12">Inapoi</Link>
        <Link href="/challenges/Chapter5/14">Mai departe</Link>
      </div>
    </>
  );
}

export default Chapter1;
