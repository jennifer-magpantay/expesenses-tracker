import {
  BalanceCard,
  BalanceContainer,
  BalanceCardHeader,
} from "./_balanceCard";
import { useTransactions } from "../../hooks/useTransactions";
import { numberFormat } from "../../helpers/formaters";

const CARD_LIST = [
  {
    id: 1,
    title: "Income",
    logo: "/static/media/income-icon.8ac4c58f7af152ab1319ccc2ab4869b4.svg",
    logoStyle: "icon-income",
    type: "income",
  },
  {
    id: 2,
    title: "Outcome",
    logo: "/static/media/outcome-icon.1c028d256b606baf3d83a9139bc7fae6.svg",
    logoStyle: "icon-outcome",
    type: "outcome",
  },
  {
    id: 3,
    title: "Balance",
    logo: "/static/media/money-icon.2f6fe73275c273cd5121b3514c04edf6.svg",
    logoStyle: "icon-money",
    type: "balance",
  },
];

export const Balance = () => {
  // calling context
  // const { transactions } = useContext(TransactionsContext);
  const { transactions } = useTransactions();

  // TODO: refactor calculating the cards amount
  // balance
  const calculateBalanceAmount = transactions.reduce((acc, transaction) => {
    if (transaction.type === "income") {
      acc += transaction.amount;
    } else {
      acc -= transaction.amount;
    }
    return acc;
  }, 0);

  // other transactions
  function calculateTransactionsAmount(type: string) {
    const filteredType = transactions.filter(
      (transaction) => transaction.type === type
    );
    const reducedAmount = filteredType.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
    return reducedAmount;
  }

  return (
    <BalanceContainer>
      {/* map card list */}
      {CARD_LIST.map(({ id, title, logo, type, logoStyle }) => (
        <BalanceCard key={id}>
          <BalanceCardHeader>
            <span className="title">{title}</span>
            {/* img src does not support {logo} as import - type: string */}
            <img src={logo} alt={title} className={logoStyle} />
          </BalanceCardHeader>
          <span className="amount">
            {type === "balance" ? numberFormat(calculateBalanceAmount) : numberFormat(calculateTransactionsAmount(type))}
          </span>
        </BalanceCard>
      ))}
    </BalanceContainer>
  );
};
