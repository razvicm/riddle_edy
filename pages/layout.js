import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { Container, Link, Modal, Spacer, Text } from "@nextui-org/react";
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
    router.pathname.split("/")[2] !== "Chapter1" && router.pathname !== "/";

  // const shouldDisplayPassengerList =
  //   router.pathname.split("/")[2] !== "Chapter1";
  return (
    <div className={styles.container}>
      <ModalIndicii visible={visibleIndicii} closeHandler={closeHandler} />
      <ModalLista visible={visibleList} closeHandler={closeHandler} />
      <header className={styles.header}>
        <Image src={"/logo.png"} alt="logo" width={50} height={50} />
        <span>Inception Treasure Hunts </span>
        <span></span>
      </header>
      <div className={styles.btnModals}>
        <Text h4 onClick={handlerIndicii}>
          Ajutor indicii
        </Text>
        {shouldDisplayPassengerList && (
          <Text h4 onClick={handlerList}>
            Lista pasageri
          </Text>
        )}
      </div>
      <main className={styles.main}>
        <Link href="/">
          <Text h2>Pierdut printre stele</Text>
        </Link>
        <Spacer y={3} />
        <Container alignItems="center" display="flex" direction="column" fluid>
          {children}
        </Container>
      </main>
      <footer className={styles.footer}>
        Copyright &copy; {new Date().getFullYear()}{" "}
      </footer>
    </div>
  );
}
