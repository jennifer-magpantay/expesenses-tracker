import styled from "styled-components";

export const ModalForm = styled.form`
  padding: var(--padding);

  span {
    display: block;
    padding-bottom: 02rem;
  }

  label,
  input {
    width: 100%;
    display: block;
    color: var(--color-black);
  }

  input {
    padding: 01rem;
    margin-bottom: 01rem;
    background: var(--color-gray-lg);
    border: none;
  }
`;

export const ModalTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    img {
      margin-right: 01rem;
    }
  }
`;
