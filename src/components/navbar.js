import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import Nav from "./nav"
import Toolbar from "./toolbar"
import ResponsiveContainer from "./responsive-container"
import RoyalAmpireLogo from "./logo"
import colors from "../constants/colors"

const HorizontalBar = styled.div`
  background-color: ${colors.white};
  position: sticky;
  top: 0;
  z-index: 1;
`

const HeaderToolbar = styled(Toolbar)`
  padding-top: 16px;
  padding-bottom: 16px;
`

const Logo = styled(Link)`
  color: ${colors.black};
  text-decoration: none;
`

const StyledRoyalAmpireLogo = styled(RoyalAmpireLogo)`
  height: 30px;
  @media (min-width: 30em) {
    height: 45px;
  }
`

const Navbar = props => (
  <HorizontalBar>
    <ResponsiveContainer>
      <HeaderToolbar>
        <Logo to="/">
          <StyledRoyalAmpireLogo />
        </Logo>
        <Nav location={props.location} />
      </HeaderToolbar>
    </ResponsiveContainer>
  </HorizontalBar>
)

Navbar.propTypes = {
  location: PropTypes.object,
}

export default Navbar
