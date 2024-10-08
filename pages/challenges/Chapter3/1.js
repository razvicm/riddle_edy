import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={26} />
      <Spacer />
      <Text h3>Capitolul 3</Text>
      <Spacer />
      <Text>
        Dupa ce am reusit sa aflam in ce zona trebuia sa mergem, am ajuns repede
        acolo, dar prea tarziu.
      </Text>
      <Spacer />

      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/tkp0SloL_18"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>
        Nu am gasit prea multe lucruri la locul faptei, un cadavru nu exista,
        dar din urmele de sange gasite eram aproape sigur ca nimeni nu ar fi
        putut supravietui atacului. Am gasit mai multe cartuse de gloante, o
        urma de bocanc, o geanta in care se afla o tableta si un mort intr-un
        sac negru cel mai probabil un pasager care nu a supravietuit aterizarii.
        Am gasit si un mormant sapat si desigur, o sapa.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter3/0-3">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter3/2">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
