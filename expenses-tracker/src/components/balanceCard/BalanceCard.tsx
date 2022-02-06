import React from "react";
import { BalanceCard, BalanceContainer, BalanceCardHeader } from "./_balanceCard";
import incomeIcon from '../../assets/income-icon.svg';
import outcomeIcon from '../../assets/outcome-icon.svg';
import moneyIcon from '../../assets/money-icon.svg';

export const Balance = () => {
  return (
    <BalanceContainer>
      <BalanceCard>
        <BalanceCardHeader>
          <span className="title">Income</span>
           <img src={incomeIcon} alt='Income' className='icon-income'/>
        </BalanceCardHeader>
        <span className="amount">1200</span>
      </BalanceCard>

      <BalanceCard>
        <BalanceCardHeader>
          <span className="title">Income</span>        
           <img src={outcomeIcon} alt='Outcome' className='icon-outcome'/>
        </BalanceCardHeader>
        <span className="amount">1200</span>
      </BalanceCard>

      <BalanceCard>
        <BalanceCardHeader>
          <span className="title">Income</span>
          <img src={moneyIcon} alt='Balance' className='icon-money'/>
        </BalanceCardHeader>
        <span className="amount">1200</span>
      </BalanceCard>
    </BalanceContainer>
  );
};
