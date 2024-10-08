import { Progress, Spacer, Text, Radio, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={5} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/60xoDjTUo98"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>
        * Urme de strangulare si hemoragie din nas <br />
        * Hemoragie in ochi
        <br />
        * O plaga pe umar provocat de o lupta
        <br />
        * Mai multe plagi pe spate, dovezile unei lupte
        <br />
        <br />
        <b>Cauza mortii:</b>
        <br />
        Hipoxia provocata din cauza strangularii, prima data a provocat
        ameteala, pierderea cunostintei si dupa aceea moartea.
      </Text>
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter1/3">
          <Link>Inapoi</Link>
        </NextLink>
        <NextLink href="/challenges/Chapter1/5">
          <Link>Mai departe</Link>
        </NextLink>
      </div>
    </>
  );
}

export default Chapter1;
