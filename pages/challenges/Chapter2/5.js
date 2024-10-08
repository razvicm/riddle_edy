import { useState } from "react";
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
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const checkAnswers = () => {
    if (answer.toLowerCase().trim() === "pegasus") {
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
      <Progress color="primary" value={21} />
      <Spacer />
      <Text h3>Capitolul 2</Text>
      <Spacer />
      <Text>Introduceti parola pentru dezarmarea usii.</Text>
      <Spacer />
      <Input
        placeholder="Introduceti parola"
        size="sm"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
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
        <NextLink href="/challenges/Chapter2/4a">
          <Link>Inapoi</Link>
        </NextLink>
        {correctAnswer && (
          <NextLink href="/challenges/Chapter2/6">
            <Link>Mai departe</Link>
          </NextLink>
        )}
      </div>
    </>
  );
}

export default Chapter1;
