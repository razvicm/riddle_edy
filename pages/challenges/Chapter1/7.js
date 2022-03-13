import { Progress, Spacer, Text, Radio, Link, Button } from "@nextui-org/react";
import NextLink from "next/link";
import { navigationStyles } from "../../../components/utils";
import React from "react";

function Chapter1() {
  const [answers, setAnswers] = React.useState({});
  const [correctAnswer, setCorrectAnswer] = React.useState(false);
  const [wrongAnswer, setWrongAnswer] = React.useState(false);
  const checkAnswers = () => {
    if (answers.a === "A" && answers.b === "B" && answers.c === "C") {
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
      <Progress color="primary" value={10} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      Indiciile din bord:
      <Spacer />
      <Text>
        <Text b> Biletul din buzunar</Text>
        <Radio.Group onChange={(e) => setAnswers((ans) => ({ ...ans, a: e }))}>
          <Radio value="A">
            <Text>
              Oven a aflat ca cineva s-a logat ilegal la bordul navei si pentru
              asta trebuia sa moara.
            </Text>
          </Radio>
          <Radio value="B">
            <Text>Biletelul nu are nimic de-a face cu moarte inginerului.</Text>
          </Radio>
          <Radio value="C">
            <Text>
              Cineva a lasat informatia asta in buzunarul mortului pentru a duce
              in eroare investigatorii.
            </Text>
          </Radio>
        </Radio.Group>
        <Spacer />

        <Text b> Autopsia </Text>
        <Radio.Group onChange={(e) => setAnswers((ans) => ({ ...ans, b: e }))}>
          <Radio value="A">
            <Text>Oven a fost strangulat fara sa opuna rezistenta.</Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>
              Oven a fost surprins de ucigas, dar inainte sa fie ucis s-a luptat
              pentru viata lui. Drept urmare ucigasul stia ce face si era mai
              puternic si mai antrenat decat victima.
            </Text>
          </Radio>
          <Radio value="C">
            <Text>
              Inafara de faptul Oven a fost strangulat nu am reusit sa aflam mai
              multe detalii despre ucigas.
            </Text>
          </Radio>
        </Radio.Group>
        <Spacer />
        <Text b> ADN </Text>
        <Radio.Group onChange={(e) => setAnswers((ans) => ({ ...ans, c: e }))}>
          <Radio value="A">
            <Text>Sangele apartinei unui animal.</Text>
          </Radio>
          <Radio value="B" size="md">
            <Text>Mostra nu este sange.</Text>
          </Radio>
          <Radio value="C">
            <Text>
              Mostra este contaminata din cauza asta va dura o perioada pana ce
              se poate recrea profilul ADN.
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
        <NextLink href="/challenges/Chapter1/6">
          <Link>Inapoi</Link>
        </NextLink>
        {correctAnswer && (
          <NextLink href="/challenges/Chapter1/8">
            <Link>Mai departe</Link>
          </NextLink>
        )}
      </p>
    </>
  );
}

export default Chapter1;
