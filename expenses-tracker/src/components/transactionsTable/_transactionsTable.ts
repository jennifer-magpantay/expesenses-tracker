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
  }

  th,
  td {
    padding: 1rem 0 1rem 2rem;
  }
`;
