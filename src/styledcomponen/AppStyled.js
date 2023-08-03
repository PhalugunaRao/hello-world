import React from 'react'
import { Container } from './Container.styled'
import Header from './Header'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Global'

const theme = {
  colors:{
    header:'#ebfbff',
    body:'#fff',
    footer:'#003333'
  }
}

function AppStyled() {
  return (
    <ThemeProvider theme = {theme}>
    <>
    <GlobalStyles/>
    <Header/>
     <Container>
      <h1>Hellow World</h1>
    </Container>
    </>
    </ThemeProvider>
   
  )
}

export default AppStyled