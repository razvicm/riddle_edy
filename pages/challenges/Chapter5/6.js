import { Progress, Spacer, Text, Input, Button, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { useState } from "react";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const checkAnswers = () => {
    if (answer.toLowerCase().trim() == "pericol") {
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
      <Progress color="primary" value={68} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />
      <Text>
        Cautati indicatorul cu pescar aflat pe malul raului si introduceti
        cuvantul al treilea de pe acesta.
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
        <NextLink href="/challenges/Chapter5/5">
          <Link>Inapoi</Link>
        </NextLink>
        {correctAnswer && (
          <NextLink href="/challenges/Chapter5/7">
            <Link>Mai departe</Link>
          </NextLink>
        )}
      </div>
    </>
  );
}

export default Chapter1;
