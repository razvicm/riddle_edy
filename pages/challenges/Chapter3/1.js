import { Progress, Spacer, Text, Radio } from "@nextui-org/react";

function Chapter1() {
  return (
    <>
      <Text h4>Progres total </Text>
      <Progress color="primary" value={5} />
      <Spacer />
      <Text h3>Capitolul 3</Text>
      <Spacer />
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/eU-rz8qsSXk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacer />
      <Text>
        Nu am gasit prea multe lucruri la locul faptei, un cadavru nu exista,
        dar din urmele de sange gasite eram aproape sigur ca nimeni nu ar fi
        putut supravietui atacului. Am gasit mai multe cartusuri de gloante, o
        urma de bocanci, o geanta in care se afla o tableta si un mort intr-un
        sac negru cel mai probabil un pasager care nu a supravietuit aterizarea.
        Am gasit si un mormant sapat si desigur o sapa.
      </Text>
    </>
  );
}

export default Chapter1;
