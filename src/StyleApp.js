import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import {ThemeProvider} from 'styled-components'
import './App.css';
import './styles.css';
import { AnimatedLogo, DarkButton, StyledButton } from './styledComponent/Button/Button.styles';
import { FancyButton } from './styledComponent/Button/Button.styles';
import { SubmitButon } from './styledComponent/Button/Button.styles';

const theme = {
  dark:{
    primary:'#000',
    text:'#fff'

  },
  light:{
    primary:'#fff',
    text:'#000'

  }
}

function StyleApp() {
  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
      {/* <img src={logo} className='App-logo' alt='logo'></img> */}
      <AnimatedLogo src={logo}/>
      <StyledButton type='submit'> Click me</StyledButton>
      <div>
        <br></br>
      </div>
      <StyledButton variant='outline'> Click me Two</StyledButton>
      <div>
        <br></br>
      </div>
      <FancyButton as ='a' >MY FANCY</FancyButton>
      <div>
        <br/>
      </div>
      <SubmitButon>Submit</SubmitButon>
      <div>
        <br/>
      </div>
      <DarkButton>DarkButton</DarkButton>
      
    </div>
    </ThemeProvider>
  )
}

export default StyleApp