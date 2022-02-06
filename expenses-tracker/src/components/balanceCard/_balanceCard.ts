import styled from "styled-components";

export const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceCard = styled.div`
  width: 32%;
  padding: 2rem;
  background: var(--color-white);  

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

  .title {
    font-weight: 700;
  }

  img {
    width: clamp(2rem, 4vw, 2.8rem);
  }
`;
