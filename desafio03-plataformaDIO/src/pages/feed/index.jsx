import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighlight } from './styles'
import bannerImage from '../../assets/banner.png'
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
    return(
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex="3">
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />                
                </Column>
                <Column flex="1" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={35} image="https://avatars.githubusercontent.com/u/86080367?v=4&size=64" nome="Marcos Caique"></UserInfo>
                    <UserInfo percentual={80} image="https://avatars.githubusercontent.com/u/86080367?v=4&size=64" nome="Marcos Caique"></UserInfo>
                    <UserInfo percentual={70} image="https://avatars.githubusercontent.com/u/86080367?v=4&size=64" nome="Marcos Caique"></UserInfo>
                    <UserInfo percentual={65} image="https://avatars.githubusercontent.com/u/86080367?v=4&size=64" nome="Marcos Caique"></UserInfo>
                    <UserInfo percentual={100} image="https://avatars.githubusercontent.com/u/86080367?v=4&size=64" nome="Marcos Caique"></UserInfo>
                </Column>
            </Container>
        </>
    )
}

export default Feed;