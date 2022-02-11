import styled from "styled-components";

export const BalanceContainer = styled.div`
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const BalanceCard = styled.div`
  width: 100%;
  padding: 2rem;
  margin-bottom: 01rem;
  background: var(--color-white);

  @media (min-width: 600px) {
    width: 32%;
    margin-bottom: unset;
  }

  .amount {
    font-size: clamp(2.5rem, 4vw, 3.2rem);
    font-weight: 400;
  }

  &:last-child {
    background: var(--color-primary);

    span {
      color: var(--color-white);
    }
  }
`;

export const BalanceCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 01rem;  
`;
