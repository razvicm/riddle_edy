import React from "react";
import {
  Progress,
  Spacer,
  Text,
  Radio,
  Input,
  Button,
} from "@nextui-org/react";

function Chapter1() {
  const [value, setValue] = React.useState("");
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={25} />
      <Spacer />
      <Text h3>Capitolul 2</Text>
      <Spacer />
      <Text>Introduceti parola pentru dezarmarea usii.</Text>
      <Spacer />
      <Input
        placeholder="Introduceti parola"
        size="sm"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Spacer />
      <Button onClick={() => console.log({ value })}>Continua</Button>
    </>
  );
}

export default Chapter1;
