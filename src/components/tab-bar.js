import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../constants/colors'
import Inline from './inline'
import Text from './text'

const Tab = styled.div`
  border-bottom: ${props => (props.isActive ? 2 : 0)}px solid
    ${colors.orange.onDarkBackground};
  padding: 16px 24px;
  cursor: pointer;
`

const TabBar = props => (
  <Inline scale="xl">
    {props.children.map(child =>
      React.cloneElement(child, {
        key: child.props.tabName,
        isActive: child.props.tabName === props.activeTab
      })
    )}
  </Inline>
)

TabBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  activeTab: PropTypes.string.isRequired
}

TabBar.displayName = 'TabBar'

TabBar.Tab = props => (
  <Tab isActive={props.isActive} onClick={() => props.onClick(props.tabName)}>
    <Text.Button isOnDarkBackground isActive={props.isActive}>
      {props.children}
    </Text.Button>
  </Tab>
)

TabBar.Tab.propTypes = {
  children: PropTypes.string,
  tabName: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

TabBar.Tab.displayName = 'TabBar.Tab'

export default TabBar
