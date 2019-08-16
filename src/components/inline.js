import PropTypes from 'prop-types'
import styled from 'styled-components'

const mapScaleToPixels = scale => {
  switch (scale) {
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

const Inline = styled.div`
  display: flex;
  align-items: ${props => props.alignItems || 'stretch'};
  > * + * {
    margin: 0 0 0 ${props => mapScaleToPixels(props.scale)}px;
  }
`

Inline.propTypes = {
  scale: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
  alignItems: PropTypes.string
}

export default Inline
