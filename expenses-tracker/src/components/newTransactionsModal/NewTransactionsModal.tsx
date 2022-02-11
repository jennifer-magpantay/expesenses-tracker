import { FormEvent, useState } from "react";
import { ThemeProvider } from "styled-components";

import closeIcon from "../../assets/close-icon.svg";
import incomeIcon from "../../assets/income-icon.svg";
import outcomeIcon from "../../assets/outcome-icon.svg";

import Modal from "react-modal";
import { ModalForm, ModalTypeContainer } from "./_newTransactionsModal";
import { btnClose, btnType, cta } from "../button/_button";
import { Button } from "../button/Button";
import { useTransactions } from "../../hooks/useTransactions";

interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionsModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionsModalProps) => {
  // const { addNewTransaction } = useContext(TransactionsContext);
  const { addNewTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    // call context to add a new transactions
    await addNewTransaction({ title, amount, type, category });
    // id and date generate by miragejs

    // reset the input to its initial value just after if the insertion is successfull
    setTitle("");
    setAmount(0);
    setType("");
    setCategory("");

    // close modal
    onRequestClose();
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
          style={{ position: "absolute", top: "4rem", right: "clamp(1rem, 2vw, 5rem" }}
          buttonOnClick={onRequestClose}
        >
          <img src={closeIcon} alt="closing button" className="icon-close" />
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
          required
        />

        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          required
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
            <Button
              type="button"
              style={{ alignItems: "center", justifyContent: "center" }}
              buttonOnClick={() => setType("outcome")}
            >
              <img src={outcomeIcon} alt="Outcome" className="icon-outcome" />
              Outcome
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
          required
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
