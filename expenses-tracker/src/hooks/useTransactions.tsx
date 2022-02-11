import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  return context;
};

// then, replace all const {...} = useContext(TransactionsContext) by const {...} = useTransactions();
