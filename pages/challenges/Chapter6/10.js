import {
  Progress,
  Spacer,
  Text,
  Radio,
  Input,
  Button,
  Link,
} from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={99} />
      <Spacer />
      <Text h3>Capitolul 6</Text>
      <Spacer />
      <Text>
        Acum ca totul este pregatit de decolare sper ca ati reusit sa
        identificati ucigasul. Deplasati-va inapoi la mina parasita, unde se
        afla si naveta(locatia din cap 2), pentru a confrunta ucigasul. Acolo o
        sa gasiti si pe cineva din echipaj care va va indruma.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter6/9">
          <Link>Inapoi</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
