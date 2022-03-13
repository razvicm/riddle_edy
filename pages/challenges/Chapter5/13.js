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
        <NextLink href="/challenges/Chapter5/12">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter5/14">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
