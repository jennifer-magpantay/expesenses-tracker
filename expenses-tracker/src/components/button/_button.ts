import styled from "styled-components";

export const ButtonComponent = styled.button`
  width: ${(props) => props.theme.width};
  display: ${(props) => props.theme.display};
  padding: 1.25rem 3rem;
  background: ${(props) => props.theme.background};
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.color};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.backgroundHover};
    border-color: ${(props) => props.theme.borderHover};
    color: ${(props) => props.theme.colorHover};
  }
`;

export const cta = {
  display: "block",
  background: "#1ea481",
  border: "none",
  color: "#ffffff",
  backgroundHover: "#0088DF",
  boxShadow: "0px 5px 5px -5px rgba(0, 0, 0, 0.25)",
};

export const btnType = {
  width: "49%",
  display: "flex",  
  background: "transparent",
  border: "02px solid #f2f2f2",
  color: "#000a09",
  backgroundHover: "#f2f2f2",
  borderHover: "#474968",
};

export const btnClose = {
  background: "transparent",
  border: 'none',
};