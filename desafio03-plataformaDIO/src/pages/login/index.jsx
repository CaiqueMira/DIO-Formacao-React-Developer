import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Column, Container, Row, Title, TitleLogin, Wrapper, CriarText, EsqueciText, SubtitleLogin } from './styles'
import { Input } from "../../components/Input";
import { MdEmail, MdLock } from 'react-icons/md'  
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api'

const schema = yup.object({
  email: yup.string().email('Campo email não é valido').required('Campo email é obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo senha é obrigatório'),
}).required();

const Login = () => {

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    });

    // console.log(isValid, errors)

    const onSubmit = async formData => {
        try {            
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`); 
            
            if (data.length !== 0) {
                navigate('/feed');
            } else {
                alert('Email ou senha inválido');
            }

            // api.get(`users?email=${formData.email}&senha=${formData.password}`).then(value => {
            //     data = value;
            //     console.log(value);
            // });

        } catch {
            alert('Houve um erro, tente novamente.');
        } finally {
            console.log(formData);
        }
    }

    const navigate = useNavigate();

    const handleClickLogin = () => {
        navigate('/feed');
    }

    return(
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
                        <TitleLogin>Faça seu cadastro</TitleLogin>                        
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>                        
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email" leftIcon={<MdEmail />}/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                            <Button title="Entrar" variant="secondary" type="submit" style={{marginTop: "40px"}}></Button>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <Link to='/cadastro'>
                                <CriarText>Criar Conta</CriarText>
                            </Link>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default Login;