import React, { useContext } from "react";
import {
  BalanceCard,
  BalanceContainer,
  BalanceCardHeader,
} from "./_balanceCard";
import { TransactionsContext } from "../../context/TransactionsContext";

const CARD_LIST = [
  {
    id: 1,
    title: "Income",
    logo: "/static/media/income-icon.8ac4c58f7af152ab1319ccc2ab4869b4.svg",
    logoStyle: "icon-income",
  },
  {
    id: 2,
    title: "Outcome",
    logo: "/static/media/outcome-icon.1c028d256b606baf3d83a9139bc7fae6.svg",
    logoStyle: "icon-outcome",
  },
  {
    id: 3,
    title: "Balance",
    logo: "/static/media/money-icon.2f6fe73275c273cd5121b3514c04edf6.svg",
    logoStyle: "icon-money",
  },
];

export const Balance = () => {
  // calling context
  const { transactions } = useContext(TransactionsContext);

  return (
    <BalanceContainer>
      {/* map card list */}
      {CARD_LIST.map(({ id, title, logo, logoStyle }) => (
        <BalanceCard key={id}>
          <BalanceCardHeader>
            <span className="title">{title}</span>
            {/* img src does not support {logo} as import - type: string */}
            <img src={logo} alt={title} className={logoStyle} />
          </BalanceCardHeader>
          <span className="amount">1200</span>
        </BalanceCard>
      ))}
    </BalanceContainer>
  );
};
