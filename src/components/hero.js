import styled from 'styled-components'

const Hero = styled.div`
  position: relative;
`

Hero.ImageWithGradient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

Hero.Image = styled.img`
  max-width: 100%;
`

Hero.Gradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 95%),
    linear-gradient(to right, rgba(0, 0, 0, 0) 98%, black 100%),
    linear-gradient(to left, rgba(0, 0, 0, 0) 98%, black 100%);
`

Hero.Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

export default Hero
