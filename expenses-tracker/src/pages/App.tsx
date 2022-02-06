import React, { useState } from "react";
import { GlobalStyle } from "../styles/global";
import { Balance } from "../components/balanceCard/BalanceCard";
import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";
import { NewTransactionsModal } from "../components/newTransactionsModal/NewTransactionsModal";
import { Table } from "../components/transactionsTable/TransactionsTable";
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
      <NewTransactionsModal
        isOpen={isModalOpen}
        onRequestClose={handleClickCloseModal}
      />
    </>
  );
};
