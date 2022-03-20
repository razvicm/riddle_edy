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
      <Text>
        Scoate din plic indiciul <b>Y</b>.
      </Text>
      <Spacer />
      <Text>
        <i style={{ lineHeight: "2rem" }}>
          Am reusit sa restaurez anuntul TV care a fost gasit pe tableta
          jurnalistului. Acum stiu cu precizie ca{" "}
          <span style={{ fontSize: "1.75rem", padding: "0 5px" }}>🩸</span> este
          ucigasul. Ne-a tinut de fraieri si ne-a lasat sa jucam asa cum voia
          el. Ma tem ca eu sunt urmatoarea pe lista lui. De aceea am scris
          aceasta scrisoare. Va rog sa nu mai aveti incredere in persoana lui
          autoritara si opriti-l pana cand nu ne va ucide pe toti. <Spacer />
          Sharon
        </i>
      </Text>
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
