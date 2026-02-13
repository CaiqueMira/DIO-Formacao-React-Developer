import React from 'react'

import logo from '../../assets/logo-dio.png'

import { Button } from '../Button'

import {
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'

import { Link } from 'react-router-dom'

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <Link to={autenticado ? '/feed' : '/login'}><img src={logo} alt="Logo da dio" /></Link>
                <BuscarInputContainer>
                    <Input placeholder="Buscar..."/>
                </BuscarInputContainer>
                {autenticado ? (
                    <>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (                    
                    <>
                        <UserPicture src='https://avatars.githubusercontent.com/u/86080367?v=4&size=64'/>
                    </>
                ) : (
                    <>
                        <MenuRight href='/'>Home</MenuRight>
                        <Button title="Entrar" style={{marginRight: "12px"}}/>
                        <Button title="Cadastrar"/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
