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
import { navigationStyles } from "../../utils";

function Chapter1() {
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const checkAnswers = () => {
    console.log({ answer });
    if (answer.toLowerCase() === "electricitate") {
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
      <Progress color="primary" value={15} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      Din cutia neagra a navei nu am reusit sa scoatem informatii foarte utile,
      dar macar am putut descarca lista pasagerilor si un scurt istoric despre
      fiecare.
      <br />
      Urmatoarea locatie este mina parasita.
      <br />
      <Spacer />
      Introduceti parola pentru capitolul 2
      <Spacer />
      <Input
        placeholder="Introduceti parola"
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
        <Link href="/challenges/Chapter1/9">Inapoi</Link>
        {correctAnswer && (
          <Link href="/challenges/Chapter2/1">Mai departe</Link>
        )}
      </div>
    </>
  );
}

export default Chapter1;
