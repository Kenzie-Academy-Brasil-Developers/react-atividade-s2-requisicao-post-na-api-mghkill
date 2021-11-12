import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Button from "../Button";
import Message from "../Message";
import { MainBox } from "./styles";
import axios from "axios";
import toast from "react-hot-toast";

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

  const handleOnSubmite = (formData) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", formData)
      .then((response) => {
        console.log(response);
        response.statusText === "OK" &&
          toast.success("Login efetuado com sucesso");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possível encontrar um usuário ou senha!");
      });
  };

  return (
    <>
      <h1>Página de login</h1>
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

          <Button type={"submit"}>Enviar</Button>
        </MainBox>
      </form>
    </>
  );
};
export default Login;
