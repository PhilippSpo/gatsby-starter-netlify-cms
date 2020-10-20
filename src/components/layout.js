import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import GlobalStyle from './GlobalStyles'

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
