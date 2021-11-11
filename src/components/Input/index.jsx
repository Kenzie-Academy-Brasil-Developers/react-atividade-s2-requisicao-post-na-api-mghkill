import { StyleInput } from "./styles";
const Input = ({ type, place, register, user }) => {
  return (
    <StyleInput>
      <input type={type} placeholder={place} {...register(user)} />
    </StyleInput>
  );
};
export default Input;
