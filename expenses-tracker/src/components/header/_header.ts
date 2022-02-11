import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 35vh;
  padding: var(--padding);
  background-color: var(--color-secundary);
`;

export const HeaderContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: clamp(10rem, 15vw, 15rem);
    // change svg color
    filter: var(--svg-color-white)
  }

  .header--button {
    background: var(--color-primary);
    color: var(--color-white);
    box-shadow: var(--box-shadow);

    &:hover,
    &:focus {
      background: var(--color-secundary-lg);
    }
  }
`;
