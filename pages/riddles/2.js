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
import { navigationStyles } from "../../components/utils";

function Chapter1() {
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const checkAnswers = () => {
    console.log({ answer });
    if (answer.toLowerCase().trim() === "24") {
      setCorrectAnswer(true);
      setWrongAnswer(false);
    } else {
      setWrongAnswer(true);
      setCorrectAnswer(false);
    }
  };

  return (
    <>
      <Spacer />
      <Text h3>2</Text>
      <Spacer />
      <Input
        size="lg"
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
        placeholder={"Introdu raspunsul"}
      />
      <Spacer />
      <Button onClick={checkAnswers}>Continua</Button>
      {correctAnswer && (
        <>
          <Text color="success">Gratulalok. Jo valasz. Folytathatod</Text>
          <Spacer />
          <Text color="success" size={25}>
            Locatia este Parcul Central
          </Text>
        </>
      )}
      {wrongAnswer && <Text color="error">Rossz valasz, meg probalkozz</Text>}
      <Spacer />
      <div style={navigationStyles}>
        <NextLink href="/riddles/1">
          <Button color="secondary" size="sm">
            Inapoi
          </Button>
        </NextLink>
        <span></span>
        {correctAnswer && (
          <NextLink href="/riddles/3">
            <Button color="success" size="sm">
              Mai departe
            </Button>
          </NextLink>
        )}
      </div>
    </>
  );
}

export default Chapter1;
