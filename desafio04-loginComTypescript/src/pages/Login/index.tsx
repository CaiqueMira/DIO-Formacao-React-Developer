import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title, FormContainer } from "./styles";
import { defaultValues, IFormLogin } from "./types";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "No minimo 6 caracteres"),
  })
  .required();

const Login = () => {
  const {
    control,
    handleSubmit,
    reset, 
    formState: { errors, isValid, touchedFields },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues,
  });

  const submitForm = (data: IFormLogin) => {
    console.log(data);
    reset();
  }

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <FormContainer onSubmit={handleSubmit(submitForm)}>
            <Input
              name="email"
              placeholder="Email"
              control={control}
              errorMessage={errors?.email?.message}
              isTouched={touchedFields?.email ?? false}
            />
            <Spacing />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              control={control}
              errorMessage={errors?.password?.message}
              isTouched={touchedFields?.password ?? false}
            />
            <Spacing />
            <Button title="Entrar" disabled={!isValid} type="submit"/>
          </FormContainer>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
