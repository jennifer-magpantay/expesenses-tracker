import React from "react";
import { BalanceCard, BalanceContainer, BalanceCardHeader } from "./_balance";

export const Balance = () => {
  return (
    <BalanceContainer>
      <BalanceCard>
        <BalanceCardHeader>
          <span className="title">Income</span>
          {/* logo */}
        </BalanceCardHeader>
        <span className="amount">1200</span>
      </BalanceCard>

      <BalanceCard>
        <BalanceCardHeader>
          <span className="title">Income</span>
          {/* logo */}
        </BalanceCardHeader>
        <span className="amount">1200</span>
      </BalanceCard>

      <BalanceCard>
        <BalanceCardHeader>
          <span className="title">Income</span>
          {/* logo */}
        </BalanceCardHeader>
        <span className="amount">1200</span>
      </BalanceCard>
    </BalanceContainer>
  );
};
