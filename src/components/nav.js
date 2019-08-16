import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Text from "./text"
import Inline from "./inline"

const NavLink = styled(Link)`
  text-decoration: none;
`

const Nav = props => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      allContentfulNavigation {
        edges {
          node {
            pages {
              title
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Inline alignItems="center" scale="l">
      {data.allContentfulNavigation.edges.map(({ node }) =>
        node.pages.map(page => (
          <NavLink key={page.slug} to={`/${page.slug}`}>
            <Text.Button isActive={props.location.pathname.includes(page.slug)}>
              {page.title}
            </Text.Button>
          </NavLink>
        ))
      )}
    </Inline>
  )
}

Nav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default Nav
