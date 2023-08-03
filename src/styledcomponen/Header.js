import React from 'react'

import { StyledHeader } from './Header.styled'
import { Container } from './Container.styled'

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src/>

        </Nav>
      </Container>
      
    </StyledHeader>
  )
}

export default Header