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
      <Progress color="primary" value={37} />
      <Spacer />
      <Text h3>Capitolul 3</Text>
      <Spacer />
      <Text>Puteti pune deoparte indiciile K, D, F</Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter3/10">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter4/1">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
