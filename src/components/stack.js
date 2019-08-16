import PropTypes from 'prop-types'
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
      return 4
  }
}

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems || 'stretch'};
  > * + * {
    margin: ${props => mapScaleToPixels(props.scale)}px 0 0 0;
  }
`

Stack.propTypes = {
  scale: PropTypes.oneOf(['none', 's', 'm', 'l', 'xl']),
  alignItems: PropTypes.string
}

export default Stack
