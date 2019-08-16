import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ResponsiveContainer from '../components/responsive-container'
import Text from '../components/text'
import Center from '../components/center'
import colors from '../constants/colors'

const Background = styled.div`
  background-color: ${colors.black};
`

const ImpressumLink = styled(Link)`
  color: ${colors.white};

  :visited {
    color: ${colors.white5};
  }
`

export default class Footer extends Component {
  render() {
    return (
      <Background>
        <ResponsiveContainer verticalInset="xl">
          <Center>
            <Text.Detail isOnDarkBackground>
              © 2018 Royal Ampire. All Rights Reserved. <ImpressumLink to="/impressum">Impressum</ImpressumLink>
            </Text.Detail>
          </Center>
        </ResponsiveContainer>
      </Background>
    )
  }
}
