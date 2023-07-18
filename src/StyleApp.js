import React from 'react'
import styled from 'styled-components'
import './App.css';
import { StyledButton } from './styledComponent/Button/Button.styles';



function StyleApp() {
  return (
    <div className='App'>
      <StyledButton> Click me</StyledButton>
      <div>
        <br></br>
      </div>
      <StyledButton variant='outline'> Click me Two</StyledButton>
      
    </div>
  )
}

export default StyleApp