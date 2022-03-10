import {
  Progress,
  Spacer,
  Text,
  Radio,
  Input,
  Button,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const checkAnswers = () => {
    console.log({ answer });
    if (answer == 1944) {
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
      <Progress color="primary" value={7} />
      <Spacer />
      <Text h3>Capitolul 2</Text>
      <Spacer />

      <Text>
        Cautati monumentul negru la baza caruie se gasesc 7 lumanari.
        <Spacer />
        Introduceti anul care este trecut de trei ori pe acesta.
      </Text>
      <Spacer />
      <Input
        placeholder="Introduceti anul"
        size="sm"
        type="tel"
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
        <Link href="/challenges/Chapter2/1">Inapoi</Link>
        {correctAnswer && (
          <Link href="/challenges/Chapter2/3">Mai departe</Link>
        )}
      </div>
    </>
  );
}

export default Chapter1;
