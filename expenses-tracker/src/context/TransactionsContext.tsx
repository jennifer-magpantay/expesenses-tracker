import { request } from "https";
import { Response } from "miragejs";
import React, { useState, useEffect, createContext } from "react";
import { dateFormat } from "../helpers/formaters";
import { getNewId } from "../helpers/getNewId";
import { api } from "../services/api";

interface TransactionsContextProps {
  transactions: TransactionData[];
  addNewTransaction: (transaction: UserInputForm) => Promise<void>;
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

interface TransactionData {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  date: string;
}

type UserInputForm = Omit<TransactionData, "id" | "date">;

export const TransactionsContext = createContext<TransactionsContextProps>(
  {} as TransactionsContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);

  // load server with transactions once the app is loaded
  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  // adding a new transactions
  async function addNewTransaction(userInputForm: UserInputForm) {
    // call the api to post the content
    const response = await api.post("/transactions", {
      ...userInputForm,
      date: dateFormat(new Date()),
    });

    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }
  return (
    <TransactionsContext.Provider value={{ transactions, addNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
