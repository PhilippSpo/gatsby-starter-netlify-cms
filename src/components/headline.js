import styled from 'styled-components'
import colors from '../constants/colors'

const Base = styled.span`
  margin: 0;
  color: ${props =>
    props.isOnDarkBackground ? colors.orange.onDarkBackground : colors.black};
`

const Headline = {
  XXL: styled(Base)`
    line-height: 1.3;
    font-size: 2.2rem;
  `,
  XL: styled(Base)`
    line-height: 1.3;
    font-size: 2rem;
  `,
  L: styled(Base)`
    line-height: 1.3;
    font-size: 1.8rem;
  `,
  M: styled(Base)`
    line-height: 1.3;
    font-size: 1.6rem;
  `,
  S: styled(Base)`
    line-height: 1.3;
    font-size: 1.4rem;
  `,
  XS: styled(Base)`
    line-height: 1.3;
    font-size: 1.2rem;
  `
}
export default Headline
