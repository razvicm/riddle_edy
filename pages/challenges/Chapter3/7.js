import { Progress, Spacer, Text, Radio, Button, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";
import React from "react";

function Chapter1() {
  const [answers, setAnswers] = React.useState({});
  const [correctAnswer, setCorrectAnswer] = React.useState(false);
  const [wrongAnswer, setWrongAnswer] = React.useState(false);
  const checkAnswers = () => {
    if (
      (answers.a === "B" || answers.a === "C") &&
      answers.b === "C" &&
      answers.c === "C" &&
      answers.d === "B" &&
      answers.e === "B"
    ) {
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
      <Progress color="primary" value={33} />
      <Spacer />
      <Text h3>Capitolul 3</Text>
      <Spacer />
      <Text> Victima 2</Text>
      <Spacer />
      <Text>
        <Text b> Urmele de bocanci:</Text>
        <Radio.Group onChange={(e) => setAnswers((ans) => ({ ...ans, a: e }))}>
          <Radio value="A">
            <Text>Cel mai probabil nu au revelanta cu crima</Text>
          </Radio>
          <Radio value="B">
            <Text>Bocanci militari de femeie</Text>
          </Radio>
          <Radio value="C">
            <Text>Bocanci militar de barbat</Text>
          </Radio>
        </Radio.Group>
        <Spacer />

        <Text b> Cartuse </Text>
        <Radio.Group onChange={(e) => setAnswers((ans) => ({ ...ans, b: e }))}>
          <Radio value="A">
            <Text>
              Ucigasul nu stapanea bine arma, de aceea a tras de atatea ori
            </Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>Ucigasul voia sa fie sigur ca victima a murit</Text>
          </Radio>
          <Radio value="C">
            <Text>
              Ucigasul isi cunostea victima si din furie a tras pana nu a mai
              avut gloante
            </Text>
          </Radio>
        </Radio.Group>
        <Spacer />
        <Text b> Cadavru </Text>
        <Radio.Group onChange={(e) => setAnswers((ans) => ({ ...ans, c: e }))}>
          <Radio value="A">
            <Text>Nu am aflat cui apartine cadavrul</Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>Inca o victima a ucigasului</Text>
          </Radio>
          <Radio value="C">
            <Text>Cadavrul nu are nimic de-a face cu fapta</Text>
          </Radio>
        </Radio.Group>
        <Spacer />
        <Text b> Sangele </Text>
        <Radio.Group onChange={(e) => setAnswers((ans) => ({ ...ans, d: e }))}>
          <Radio value="A">
            <Text>Sangele ii apartine ucigasului</Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>Sangele ii apartine jurnalistului</Text>
          </Radio>
          <Radio value="C">
            <Text>Sangele apartine cadavrului de la locul faptei</Text>
          </Radio>
        </Radio.Group>
        <Spacer />
        <Text b> Lipsa cadavru </Text>
        <Radio.Group onChange={(e) => setAnswers((ans) => ({ ...ans, e: e }))}>
          <Radio value="A">
            <Text>
              Ucigasul are un complice care l-a ajutat la transportarea
              cadavrului
            </Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>
              Ucigasul este antrenat si a reusit singur sa transporte cadavrul
            </Text>
          </Radio>
          <Radio value="C">
            <Text>Cadavrul a fost dus de un animal din zona</Text>
          </Radio>
        </Radio.Group>
        <Spacer />
      </Text>
      <Spacer />
      <Button onClick={checkAnswers}>Verifica</Button>
      {correctAnswer && (
        <Text color="success">
          Felicitari! Raspunsurile sunt corecte. Poti continua.
        </Text>
      )}
      {wrongAnswer && (
        <Text color="error">
          Unul sau mai multe raspunsuri sunt gresite. Incearca din nou.
        </Text>
      )}
      <p style={navigationStyles}>
        <NextLink href="/challenges/Chapter3/6">
          <Link>Inapoi</Link>
        </NextLink>
        {correctAnswer && (
          <NextLink href="/challenges/Chapter3/8">
            <Link>Mai departe</Link>
          </NextLink>
        )}
      </p>
    </>
  );
}

export default Chapter1;
