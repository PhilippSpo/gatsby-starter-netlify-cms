import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Navbar from '../components/Navbar'
import Footer from '../components/footer'

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

const Main = styled.main`
  background-color: black;
  min-height: calc(100vh - 80px);
`

const TemplateWrapper = props => (
  <React.Fragment>
    <GlobalStyle />
    <Helmet title="Royal Ampire" />
    <Navbar location={props.location} />
    <Main>{props.children}</Main>
    <Footer />
  </React.Fragment>
)

TemplateWrapper.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
}

export default TemplateWrapper
