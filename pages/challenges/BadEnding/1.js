import { Progress, Spacer, Text, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h3>Bad Ending</Text>
      <Spacer />

      <Text>
        Cand am inchis usile si am pornit turbinele, senzorii de pe suprafata
        aratau pragul critic al toxicitatii aerului cu spori de ciuperci. Chiar
        si asa am reusit sa decolam si sa parasim planeta fara mari probleme.
        Cand am ajuns in orbita, nanocalculatorul meu arata ca testul ADN care a
        durat 48h are un rezultat.
      </Text>
      <div style={navigationStyles}>
        <span></span>
        <NextLink href="/challenges/BadEnding/2">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
