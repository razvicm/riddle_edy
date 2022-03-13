import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={64} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/djF3y-oSRtY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>Scoateti din plic indiciul P.</Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter5/3">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter5/5">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
