import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 30vh;
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
    filter: invert(100%) sepia(0%) saturate(7447%) hue-rotate(77deg)
      brightness(106%) contrast(101%);
  }

  button {
    width: auto;
    display: block;
    padding: 0.5em 1.5em;
    // margin-inline: auto;
    background: var(--color-primary);
    border: none;
    box-shadow: var(--box-shadow);
    color: var(--color-white);
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      background: var(--color-secundary-lg);
    }
  }
`;
