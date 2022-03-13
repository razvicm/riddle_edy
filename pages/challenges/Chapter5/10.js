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
      <Progress color="primary" value={73} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />
      <Text>Scoate din plic indiciul Y.</Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter5/9">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter5/11">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
