import { ThemeProvider } from "styled-components";
import { HeaderContainer, HeaderContainerContent } from "./_header";
import logoSvg from "../../assets/logoipsum.svg";
import { Button } from "../button/Button";
import { cta } from "../button/_button";

interface HeaderProps {
  onClickOpenModal: () => void;
}
export const Header = ({ onClickOpenModal }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderContainerContent>
        <img src={logoSvg} alt="Logo Ipsum" />
        <ThemeProvider theme={cta}>
          <Button
            type="button"           
            buttonOnClick={onClickOpenModal}
          >
            ADD TRANSACTION +
          </Button>
        </ThemeProvider>
      </HeaderContainerContent>
    </HeaderContainer>
  );
};
