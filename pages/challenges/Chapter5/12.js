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
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const checkAnswers = () => {
    if (answer.toLowerCase() == "erni") {
      setCorrectAnswer(true);
      setWrongAnswer(false);
    } else {
      setWrongAnswer(true);
      setCorrectAnswer(false);
    }
  };
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={76} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />
      <Text>
        Urmatoarea locatie este dealul Cetatuii.
        <br /> Mergeti si cautati crucea din varf, iar pe ea veti gasi doua
        cuvinte. Introduceti prima si ultima litera din primul cuvant si la fel
        pentru al doilea.
      </Text>
      <Spacer />
      <Input
        placeholder="Introduceti cuvantul"
        size="sm"
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
      />
      <Spacer />
      <Button onClick={checkAnswers}>Continua</Button>
      {correctAnswer && (
        <Text color="success">
          Felicitari! Raspunsul este corect. Poti continua.
        </Text>
      )}
      {wrongAnswer && (
        <Text color="error">Raspunsul este gresit. Incearca din nou.</Text>
      )}
      <Spacer />
      <div style={navigationStyles}>
        <NextLink href="/challenges/Chapter5/11">
          <Link>Inapoi</Link>
        </NextLink>
        {correctAnswer && (
          <NextLink href="/challenges/Chapter5/13">
            <Link>Mai departe</Link>
          </NextLink>
        )}
      </div>
    </>
  );
}

export default Chapter1;
