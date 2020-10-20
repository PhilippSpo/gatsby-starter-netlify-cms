import styled from 'styled-components'
import colors from '../constants/colors'

const getColor = props => {
  const baseColor = props.isOnDarkBackground ? colors.white : colors.black
  if (props.isActive) {
    return props.isOnDarkBackground
      ? colors.orange.onDarkBackground
      : colors.orange.onBrightBackground
  }
  return baseColor
}

const Text = {
  Body: styled.span`
    line-height: 1.5;
    font-size: 1.1rem;
    font-weight: 400;
    color: ${props => (props.isOnDarkBackground ? colors.white : colors.black)};
    * + p {
      margin: 16px 0 0 0;
    }
    * + ul {
      margin-top: 1em;
    }
    ul {
      list-style: disc;
    }
    li {
      margin-left: 1em;
    }
  `,
  Detail: styled.span`
    line-height: 1.1;
    font-size: 0.9rem;
    font-weight: 400;
    color: ${props => (props.isOnDarkBackground ? colors.white : colors.black)};
  `,
  Quote: styled.p`
    line-height: 1.3;
    font-size: 1.3rem;
    color: ${colors.orange8};
    font-weight: 300;
    font-style: italic;
  `,
  Button: styled.span`
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.14rem;
    color: ${getColor};
    transition: color 0.2s;
    :hover {
      color: ${colors.orange6};
    }
  `,
  LandingPageButton: styled.span`
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    color: ${colors.orange1};
    transition: color 0.2s;
    :hover {
      color: ${colors.orange2};
    }
  `
}
export default Text
