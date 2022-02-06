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

  .form--button-submit {
    width: 100%;
    margin-top: 01rem;
    background: var(--color-primary);
    color: var(--color-white);
    box-shadow: var(--box-shadow);

    &:hover,
    &:focus {
      background: var(--color-secundary-lg);
    }
  }
`;

export const ModalTypeContainer = styled.div`
  display: flex;
  align-itens: center;
  justify-content: space-between;

  .modal--button-type {
      width: 49%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 01rem 0;
      background: transparent;
      border: 02px solid var(--color-gray-lg);
      box-shadow: unset;

      &:hover, &:focus{
          border-color: var(--color-gray);
      }
      
      img{
          width: 2rem;
          margin-right: 01rem;
      }
  }
`
