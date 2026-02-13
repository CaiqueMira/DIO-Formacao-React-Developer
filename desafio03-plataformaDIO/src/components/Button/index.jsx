import React from 'react'

import { ButtonContainer } from './styles'

const Button = ({title, variant="primary", onClick, ...rest}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} {...rest}>
        {title}
    </ButtonContainer>
  )
}

export { Button }


