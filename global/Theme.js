import { createGlobalStyle } from 'styled-components'

export const Theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF'
  }
}

export const Resets = createGlobalStyle`
  #__next, html, body {
    font-family: sans-serif;
    min-height: 100vh;
    margin: 0;
    width: 100vw;
  }
  
  @font-face {
    font-family: 'sans';
    font-style: normal;
    font-weight: normal;
  }

  * {
    box-sizing: border-box;
  }
`
