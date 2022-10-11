import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { Container, Link, Modal, Spacer, Text } from "@nextui-org/react";
import NextLink from "next/link";
import { useRouter } from "next/dist/client/router";
import ModalIndicii from "../components/ModalIndicii";
import ModalLista from "../components/ModalLista";

export default function Layout({ children }) {
  const router = useRouter();
  const [visibleIndicii, setVisibleIndicii] = React.useState(false);
  const [visibleList, setVisibleList] = React.useState(false);
  const handlerIndicii = () => setVisibleIndicii(true);
  const handlerList = () => setVisibleList(true);
  const closeHandler = () => {
    setVisibleIndicii(false);
    setVisibleList(false);
  };
  const shouldDisplayPassengerList =
    router.pathname.split("/")[2] !== "Chapter1" &&
    router.pathname.split("/")[2] !== "Intro" &&
    router.pathname !== "/";

  // const shouldDisplayPassengerList =
  //   router.pathname.split("/")[2] !== "Chapter1";
  return (
    <div className={styles.container}>
      <ModalIndicii visible={visibleIndicii} closeHandler={closeHandler} />
      <ModalLista visible={visibleList} closeHandler={closeHandler} />
      <header className={styles.header}>
        <span>Rejtveny </span>
      </header>

      <main className={styles.main}>
        <Container alignItems="center" display="flex" direction="column" fluid>
          {children}
        </Container>
      </main>
    </div>
  );
}
