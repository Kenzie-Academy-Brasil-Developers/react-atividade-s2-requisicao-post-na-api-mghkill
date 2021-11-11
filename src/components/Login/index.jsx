import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Button from "../Button";
import Message from "../Message";
import { MainBox } from "./styles";

const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Digite o usuário"),
    password: yup.string().required("Digite a senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleOnSubmite = (data) => {};

  return (
    <form onSubmit={handleSubmit(handleOnSubmite)}>
      <MainBox>
        <span>User</span>
        <Message errors={errors.username?.message} />

        <Input type={"text"} place="" register={register} user={"username"} />
        <span>password</span>
        <Message errors={errors.password?.message} />

        <Input
          type={"password"}
          place=""
          register={register}
          user={"password"}
        />

        <Button type={"submit"} value={"Enviar"} />
      </MainBox>
    </form>
  );
};
export default Login;
