import React, { FormEvent, useState } from "react";
import { ThemeProvider } from "styled-components";
import { api } from "../../services/api";
import Modal from "react-modal";
import { ModalForm, ModalTypeContainer } from "./_newTransactionsModal";
import closeIcon from "../../assets/close-icon.svg";
import incomeIcon from "../../assets/income-icon.svg";
import outcomeIcon from "../../assets/outcome-icon.svg";
import { btnClose, btnType, cta } from "../button/_button";
import { Button } from "../button/Button";

interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionsModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionsModalProps) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    // save user input into data obj
    const data = { title, amount, type, category, date };
    // call the api to post the content
    api.post("/transactions", data);
    // reset the input to its initial value
    setTitle("");
    setAmount(0);
    setType("");
    setCategory("");
    // close modal?
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Register new transaction form"
      overlayClassName="modal--overlay"
      className="modal--content"
    >
      <ThemeProvider theme={btnClose}>
        <Button
          type="button"
          style={{ position: "absolute", top: "4rem", right: "5rem" }}
          buttonOnClick={onRequestClose}
        >
          <img src={closeIcon} alt="closing button" className="icon-close"/>
        </Button>
      </ThemeProvider>

      <ModalForm onSubmit={handleFormSubmit}>
        <span className="title">New Transaction</span>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <ModalTypeContainer>
          <ThemeProvider theme={btnType}>
            <Button
              type="button"
              style={{ alignItems: "center", justifyContent: "center" }}
              buttonOnClick={() => setType("income")}
            >
              <img src={incomeIcon} alt="Income" className="icon-income" />
              Income
            </Button>
          </ThemeProvider>

          <ThemeProvider theme={btnType}>
            <Button type="button" buttonOnClick={() => setType("outcome")}>
              <img src={outcomeIcon} alt="Outcome" className="icon-outcome" />
              Income
            </Button>
          </ThemeProvider>
        </ModalTypeContainer>

        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <ThemeProvider theme={cta}>
          <Button type="submit" style={{ width: "100%" }}>
            REGISTER
          </Button>
        </ThemeProvider>
      </ModalForm>
    </Modal>
  );
};
