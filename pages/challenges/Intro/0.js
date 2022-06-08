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
import { useState } from "react";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h3>Intro</Text>
      <Spacer />

      <Spacer />
      <Text>
        <b>Informatii utile</b>
        <Spacer />
        Toate codurile/raspunsurile pot fi introduse atat cu litere mari, cat si
        cu litere mici.
        <Spacer />
        In cazul in care nu reusiti sa rezolvati un challenge puteti apela la
        ajutor (in partea de sus a paginii gasiti butonul &quot;
        <b>Ajutor indicii</b>&quot;).
        <Spacer />
        Indiciile sunt graduale, urmand ca ultimul sa va dea si raspunsul
        corect.
        <Spacer />
        {/* De asemenea, ne puteti scrie si pe Messenger, in cazul in care nu
        reusiti sa treceti mai departe
        (https://www.facebook.com/InceptionTreasureHunts).
        <Spacer /> */}
        Mult succes! 😉
      </Text>
      <Spacer />

      <div style={navigationStyles}>
        <span></span>

        <NextLink href="/challenges/Intro/1">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
