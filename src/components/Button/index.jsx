import { StyleButton } from "./styles";
const Button = ({ type, value }) => {
  return (
    <StyleButton>
      <button type={type}>{value}</button>
    </StyleButton>
  );
};
export default Button;
