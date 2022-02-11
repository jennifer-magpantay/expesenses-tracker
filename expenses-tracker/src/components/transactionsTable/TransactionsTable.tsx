import { numberFormat } from "../../helpers/formaters";
import { TableContainer } from "./_transactionsTable";
import { useTransactions } from "../../hooks/useTransactions";
import { Button } from "../button/Button";
import closeIcon from "../../assets/close-icon.svg";
import { ThemeProvider } from "styled-components";
import { btnClose } from "../button/_button";

export const TransactionsTable = () => {
  // calling context
  // const {transactions} = useContext(TransactionsContext);
  const { transactions, deleteTransactionById } = useTransactions();

  function handleButtonDelete(id: any) {
    // DELETE /api/transactions/:id to remove an existing record
      deleteTransactionById(id);
  }

  return (
    <TableContainer>
      <thead>
        {/* display thead titles juste if the lenght is greater than 0 */}
        {transactions.length > 0 && (
          <>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col">Date</th>
            </tr>
          </>
        )}
      </thead>
      <tbody>
        {/* tr td generated by maping a list */}
        {transactions.map(({ id, title, amount, type, category, date }) => {
          return (
            <tr key={id}>
              <td>{title}</td>
              <td className={type}>{numberFormat(amount)}</td>
              <td>{category}</td>
              <td>
                {date}
                <ThemeProvider theme={btnClose}>
                  <Button
                    type="button"
                    style={{
                      padding: "unset",
                    }}
                    buttonOnClick={() => handleButtonDelete(id)}
                  >
                    <img
                      src={closeIcon}
                      alt="closing button"
                      className="icon-close"
                    />
                  </Button>
                </ThemeProvider>
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
};
