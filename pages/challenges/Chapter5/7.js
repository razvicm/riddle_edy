import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={15} />
      <Spacer />
      <Text h3>Capitolul 1</Text>
      <Spacer />
      <Text>
        Cu ajutorul hartii digitale facute de dronele noastre, destul de rapid
        am reusit sa gasim locul crimei. A treia victima era Sharon, care zacea
        intr-o balta de sange impuscate din spate aparent a incercat sa fuga de
        criminal.
      </Text>
    </>
  );
}

export default Chapter1;
