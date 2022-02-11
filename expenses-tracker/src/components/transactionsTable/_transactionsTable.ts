import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  /* keep same width though the columns */
  table-layout: fixed;
  border-spacing: 0 0.5rem;
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  text-align: left;

  thead {
    color: var(--color-gray-dk);
    font-family: "Poppins", Arial, Helvetica, sans-serif;
  }

  tbody {
    background: var(--color-white);
    color: var(--color-gray);
    font-family: "Roboto", Arial, Helvetica, sans-serif;

    & > tr td:last-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    /* & > tr:hover td {
      background: red;
    } */

    .income {
      color: var(--color-primary);
    }

    .income::before {
      content: "+";
      margin-right: 6px;
    }

    .outcome {
      color: var(--color-error);
    }

    .outcome::before {
      content: "-";
      margin-right: 6px;
    }
  }

  th,
  td {
    padding: 1rem;

    @media (min-width: 600px) {
      padding: 1rem 2rem;
    }
  }
`;
