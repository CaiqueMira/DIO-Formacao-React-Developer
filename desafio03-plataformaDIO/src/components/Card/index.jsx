import React from 'react'

import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture 
} from './styles'

import { FiThumbsUp } from 'react-icons/fi'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/86080367?v=4&size=64'/>
                <div>
                    <h4>Caique Miranda</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp dio no Global avanade... <strong>Saiba mais</strong></p>                
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card };
