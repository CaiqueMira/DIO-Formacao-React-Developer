import { Container, Column, Title, Wrapper, Text, TextMinor } from "./styles"
import { Input } from "../../components/Input"
import { FaUser } from "react-icons/fa6";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api";
import { Header } from "../../components/Header";

const schema = yup
  .object({
    name: yup.string().required('Campo nome é obrigatório'),
    email: yup.string().required('Campo E-mail é obrigatório').email('E-mail inválido'),
    password: yup.string().min(8, 'Senha deve possuir pelo menos 8 caracteres').required('Campo senha é obrigatório'),
  })
  .required()

export const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit"
    });

    const handleLoginClick = () => {
        navigate('/login');
    }

    const onSubmit = async formData => {
        try {
            console.log('entrou no try');            

            api.post('users', {
                name: formData.name,
                email: formData.email,
                senha: formData.password 
            });

            navigate('/login');

        } catch {
            alert('Houve um erro, tente novamente.');
        } finally {
            console.log(formData);
        }
    }

  return (
    <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, 
                    dominar as principais tecnologias e entrar 
                    mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <Title>
                        Comece agora grátis
                    </Title>
                    <Text variant="margin-bottom">
                        Crie sua conta e make the change._
                    </Text>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <Input control={control} leftIcon={<FaUser />} name="name" errorMessage={errors?.name?.message} placeholder="Nome Completo" />
                        <Input control={control} leftIcon={<MdEmail />} name="email" errorMessage={errors?.email?.message} placeholder="E-mail"/>
                        <Input control={control} leftIcon={<MdLock />} name="password" errorMessage={errors?.password?.message} type="password" placeholder="Password"/>
                        <Button title='Criar minha conta' variant="secondary" type="submit" style={{marginTop: "40px"}}/>
                    </form>
                    <Text variant="margin-top">
                        Ao clicar em "criar minha conta grátis", 
                        declaro que aceito as Políticas de Privacidade 
                        e os Termos de Uso da DIO.
                    </Text>
                    <TextMinor>
                        Já tenho conta. <span onClick={handleLoginClick} className="login">Fazer login</span>
                    </TextMinor>
                </Wrapper>
            </Column>
        </Container>
    </>
  )
}
