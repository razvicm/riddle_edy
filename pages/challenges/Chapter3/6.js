import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={32} />
      <Spacer />
      <Text h3>Capitolul 3</Text>
      <Spacer />
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/l-fp433ymoU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>
        Vakko <br />
        * un om a lui Johnson a murit la prabusirea navei.
        <br />
        * cel mai probabil nu are nici o legatura cu ucigasul
        <br />* mormantul a fost sapat pentru el si ceilalti pasageri care au
        murit.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter3/5">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter3/7">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
