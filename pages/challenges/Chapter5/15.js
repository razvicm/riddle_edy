import { Progress, Spacer, Text, Radio, Button, Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import { navigationStyles } from "../../../components/utils";

function Chapter1() {
  const [answers, setAnswers] = React.useState({});
  const [correctAnswer, setCorrectAnswer] = React.useState(false);
  const [wrongAnswer, setWrongAnswer] = React.useState(false);
  const checkAnswers = () => {
    if (
      answers.a === "A" &&
      (answers.b === "A" || answers.b === "B") &&
      answers.c === "A" &&
      (answers.d === "B" || answers.d === "C") &&
      answers.e === "A"
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
      <Progress color="primary" value={79} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />
      <Text>
        <Text b> Autopsia:</Text>
        <Radio.Group onChange={(e) => setAnswers((ans) => ({ ...ans, a: e }))}>
          <Radio value="A">
            <Text>
              Sharon a murit pe loc dupa ce a fost doborata de glontul
              ucigasului.
            </Text>
          </Radio>
          <Radio value="B">
            <Text>
              Sharon a murit doar dupa cateva minute dupa ce a fost impuscata.
            </Text>
          </Radio>
          <Radio value="C">
            <Text>Sharon mai era in viata cand a fost gasita</Text>
          </Radio>
        </Radio.Group>
        <Spacer />

        <Text b> Scrisoarea </Text>
        <Radio.Group onChange={(e) => setAnswers((ans) => ({ ...ans, b: e }))}>
          <Radio value="A">
            <Text>Ucigasul este un barbat</Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>Ucigasul este o femeie</Text>
          </Radio>
          <Radio value="C">
            <Text>Ucigasul are de-a face cu Headshot</Text>
          </Radio>
        </Radio.Group>
        <Spacer />
        <Text b> Cartus </Text>
        <Radio.Group onChange={(e) => setAnswers((ans) => ({ ...ans, c: e }))}>
          <Radio value="A">
            <Text>Cartusul provine dintr-un sniper militar</Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>Cartusul provine dintr-un pistol normal</Text>
          </Radio>
          <Radio value="C">
            <Text>Cartusul provine dintr-un pump-gun</Text>
          </Radio>
        </Radio.Group>
        <Spacer />
        <Text b> Firele de par </Text>
        <Radio.Group onChange={(e) => setAnswers((ans) => ({ ...ans, d: e }))}>
          <Radio value="A">
            <Text>Firele nu au nimic de-a face cu crima</Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>
              Fry este ucigasul deoarece s-au gasit firele ei de par la locul
              faptei{" "}
            </Text>
          </Radio>
          <Radio value="C">
            <Text>
              Cu firele de par a lui Fry a reusit ucigasul sa deschida seiful
              unde se tineau armele
            </Text>
          </Radio>
        </Radio.Group>
        <Spacer />
        <Text b> Pozitia tragatorului </Text>
        <Radio.Group onChange={(e) => setAnswers((ans) => ({ ...ans, e: e }))}>
          <Radio value="A">
            <Text>
              Pozitia, conditiile meteorologice si distanta plus faptul ca
              Sharon a fost doborata cu un singur glont arata ca ucigasul este
              profesionist in folosirea aceste tip de arma.
            </Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>
              Ucigasul a avut mare noroc ca a putut-o impusca pe Sharon.
            </Text>
          </Radio>
          <Radio value="C">
            <Text>
              Sharon a fost impuscata dintr-un alt loc ,dupa care indiciile au
              fost aduse aici cpentru a induce detectivii in eroare.
            </Text>
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
      <Spacer />
      <p style={navigationStyles}>
        <Link href="/challenges/Chapter5/14">Inapoi</Link>
        {correctAnswer && (
          <Link href="/challenges/Chapter5/16">Mai departe</Link>
        )}
      </p>
    </>
  );
}

export default Chapter1;
