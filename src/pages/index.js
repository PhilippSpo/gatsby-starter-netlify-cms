import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import LogoWithStars from "../components/logo-with-stars"
import GlobalStyle from "../components/GlobalStyles"
import Text from "../components/text"
import Stack from "../components/stack"
import colors from "../constants/colors"
import MusicNote from "../components/music-note"
import Footer from "../components/footer"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const ImageContainer = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  border-top: 10px solid ${colors.orange2};
  > * {
    height: 100%;
  }
`

const ImageOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  animation: 1s ${fadeOut} ease-out 3s forwards;
`

const ImageOverlayPattern = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23e6cf79' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
`

const StyledRoyalAmpireLogo = styled(LogoWithStars)`
  fill: ${colors.orange1};
  width: 90vw;
  max-width: 45em;
  height: auto;
`

const LandingPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  [name="logo"] {
    opacity: 0;
    animation: 1s ${fadeIn} ease-out 3s forwards;
  }
  [name="stars"] {
    opacity: 1;
    animation: 1s ${fadeOut} ease-out 3s forwards;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: Oswald;
  position: relative;
  display: flex;
  align-items: center;
  opacity: 0;
  animation: 1s ${fadeIn} ease-out 3s forwards;
  > :nth-child(2) {
    opacity: 0;
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 48px;
    height: 48px;
    color: ${colors.black};
    transition: opacity 0.3s ease-in-out;
  }
  :hover > :nth-child(2) {
    opacity: 0.8;
  }
`

const ResponsiveInline = styled(Stack)`
  > * + * {
    margin: 32px 0 0;
  }
  @media (min-width: 30em) {
    flex-direction: row;
    > * + * {
      margin: 0 0 0 64px;
    }
  }
`

const NotFoundPage = props => {
  const [centerStarsHorizontally, setHorizontalCentering] = useState(true)
  const [centerStarsVertically, setVerticalCentering] = useState(true)
  setTimeout(() => {
    setHorizontalCentering(false)
    setTimeout(() => {
      setVerticalCentering(false)
    }, 1000)
  }, 1000)
  return (
    <>
      <LandingPageLayout>
        <SEO title="Royal Ampire" />
        <GlobalStyle />
        <ImageContainer>
          <Img
            fluid={props.data.contentfulLandingPage.heroImage.fluid}
            alt={props.data.contentfulLandingPage.title}
            objectFit="fill"
          />
          <ImageOverlayPattern />
          <ImageOverlay />
        </ImageContainer>
        <Stack scale="xl" alignItems="center">
          <StyledRoyalAmpireLogo
            verticallyCenterStars={centerStarsVertically}
            horizontallyCenterStars={centerStarsHorizontally}
          />
          <ResponsiveInline alignItems="center">
            {props.data.allContentfulNavigation.edges.map(({ node }) =>
              node.pages.map(page => (
                <NavLink key={page.slug} to={`/${page.slug}`}>
                  <Text.LandingPageButton
                    isActive={props.location.pathname.includes(page.slug)}
                    isOnDarkBackground
                  >
                    {page.title}
                  </Text.LandingPageButton>
                  <MusicNote />
                </NavLink>
              ))
            )}
          </ResponsiveInline>
        </Stack>
      </LandingPageLayout>
      <Footer />
    </>
  )
}

export const LandingPageQuery = graphql`
  query LandingPageQuery {
    contentfulLandingPage {
      id
      heroImage {
        fluid(maxWidth: 900) {
          ...GatsbyContentfulFluid
        }
      }
      title
    }
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
`

export default NotFoundPage
