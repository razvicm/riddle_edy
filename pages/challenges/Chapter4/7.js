import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={52} />
      <Spacer />
      <Text h3>Capitolul 4</Text>
      <Spacer />

      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/fjXsvN2bb40"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter4/6">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter4/8">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
