import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    font-family: Lato;
  }
  h1, h2 {
    margin: 1.5em 0 0.5em;
  }
  h1 {
    font-size: 1.8em;
  }
  h2 {
    font-size: 1.5em;
  }
`

export default GlobalStyle
