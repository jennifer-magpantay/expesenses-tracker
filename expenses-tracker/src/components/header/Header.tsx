import { HeaderContainer, HeaderContainerContent } from "./_header";
import logoSvg from "../../assets/logoipsum.svg";

interface HeaderProps {
  onClickOpenModal: () => void;
}
export const Header = ({ onClickOpenModal }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderContainerContent>
        <img src={logoSvg} alt="Logo Ipsum" />
        <button type="button" onClick={onClickOpenModal}>
          ADD TRANSACTION +
        </button>
      </HeaderContainerContent>
    </HeaderContainer>
  );
};
