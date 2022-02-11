import React, { useState, useEffect, createContext } from "react";
import { dateFormat } from "../helpers/formaters";
import { api } from "../services/api";

interface TransactionsContextProps {
  transactions: TransactionData[];
  addNewTransaction: (transaction: UserInputForm) => Promise<void>;
  deleteTransactionById: (id: any) => Promise<void>;
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

interface TransactionData {
  id: string;
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

  // axios load server with transactions once the app is loaded
  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  // adding a new transactions => call the api to post the content
  async function addNewTransaction(userInputForm: UserInputForm) {
    const response = await api.post("/transactions", {
      ...userInputForm,
      date: dateFormat(new Date()),
    });

    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  // deleting a transaction by id
  // 'id : number' triggers error on route id param "/transactions/:id", id
  async function deleteTransactionById(id: any) {
    // const response = await api.delete("/transactions/:id", id); //DOES NOT WORK

    // deleting by filtering and updating transactions
    const filteredTransactions = transactions.filter(
      (item: any) => item.id !== id
    );
    setTransactions(filteredTransactions);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, addNewTransaction, deleteTransactionById }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
