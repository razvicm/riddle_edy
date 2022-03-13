import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h3>Bad Ending</Text>
      <Spacer />
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/sbcYJgG7ZWY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>
        * Materialul analizat contine ADN-ul detectivului Richard Ridick. <br />
        * Se pare ca detectivul a devenit suspectul principal.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/BadEnding/1">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/BadEnding/3">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
