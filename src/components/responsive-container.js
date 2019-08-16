import styled from 'styled-components'

const mapScaleToPixels = scale => {
  switch (scale) {
    case 'none':
      return 0
    case 's':
      return 4
    case 'm':
      return 8
    case 'l':
      return 16
    case 'xl':
      return 32
    default:
      return 0
  }
}

const ResponsiveContainer = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: ${props => mapScaleToPixels(props.verticalInset)}px 16px;
`

export default ResponsiveContainer
