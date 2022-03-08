import {
  Progress,
  Spacer,
  Text,
  Radio,
  Input,
  Button,
} from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={15} />
      <Spacer />
      <Text h3>Capitolul 5</Text>
      <Spacer />
      Nu dupa mult timp am gasit si locul de unde a fost impuscata Sharon. Nici
      aici nu am gasit prea multe indicii, doar un singur cartus de glont de
      lunetist si cateva fire de par blonde.
    </>
  );
}

export default Chapter1;
