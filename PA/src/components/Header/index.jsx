import { ContainerHeaderStyle } from "./Header";
import { AiOutlinePaperClip } from "react-icons/ai";

function Header({ title, iconHeader }) {
  return (
    <ContainerHeaderStyle>
      {iconHeader}
      <h1>{title}</h1>
    </ContainerHeaderStyle>
  );
}

export default Header;
