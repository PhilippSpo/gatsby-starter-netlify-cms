import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ResponsiveContainer from "../components/responsive-container"
import Text from "../components/text"
import Center from "../components/center"
import colors from "../constants/colors"
import Stack from "./stack"
import Inline from "./inline"

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
            <Stack>
              <Text.Detail isOnDarkBackground>
                © 2020 Royal Ampire. All Rights Reserved.
              </Text.Detail>
              <Center>
                <Inline>
                  <Text.Detail>
                    <ImpressumLink to="/impressum">Impressum</ImpressumLink>
                  </Text.Detail>
                  <Text.Detail>
                    <ImpressumLink to="/datenschutzerklaerung">
                      Datenschutzerklärung
                    </ImpressumLink>
                  </Text.Detail>
                </Inline>
              </Center>
            </Stack>
          </Center>
        </ResponsiveContainer>
      </Background>
    )
  }
}
