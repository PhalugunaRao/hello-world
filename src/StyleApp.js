import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import './App.css';
import './styles.css';
import { AnimatedLogo, StyledButton } from './styledComponent/Button/Button.styles';
import { FancyButton } from './styledComponent/Button/Button.styles';
import { SubmitButon } from './styledComponent/Button/Button.styles';



function StyleApp() {
  return (
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
      
    </div>
  )
}

export default StyleApp