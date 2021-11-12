import { StyleButton } from "./styles";
const Button = ({ type, children }) => {
  return (
    <StyleButton>
      <button type={type}>{children}</button>
    </StyleButton>
  );
};
export default Button;
