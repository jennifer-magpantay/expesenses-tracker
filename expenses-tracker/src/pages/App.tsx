import React, { useState } from "react";
import { Balance } from "../components/balance/Balance";
import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";
import { Table } from "../components/transactions/Transactions";
import { GlobalStyle } from "../styles/global";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClickOpenModal() {
    setIsModalOpen(true);
  }

  function handleClickCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onClickOpenModal={handleClickOpenModal} />
      <Main>
        <Balance />
        <Table />
      </Main>
      <Modal isOpen={isModalOpen} onRequestClose={handleClickCloseModal}>
        <h2>LOREM LOREM</h2>
      </Modal>
    </>
  );
};
