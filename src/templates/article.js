import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import format from "date-fns/format"
import deLocale from "date-fns/locale/de"
import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import ResponsiveContainer from "../components/responsive-container"
import Headline from "../components/headline"
import Stack from "../components/stack"
import Text from "../components/text"
import Hero from "../components/hero"
import Layout from "../components/layout"
import TabBar from "../components/tab-bar"
import ImageGrid from "../components/image-grid"

const Concert = props => (
  <Text.Body isOnDarkBackground>
    {format(props.date.de, "DD.MM.YYYY", { locale: deLocale })} •{" "}
    {props.location.de} • {props.title.de}
  </Text.Body>
)

const ImageCollection = props => <pre>Image Collection</pre>

const ComponentMap = {
  concert: Concert,
  imageCollection: ImageCollection,
}

const TextLayout = styled.div`
  max-width: ${props => (props.pullUp ? "40em" : "none")};
  width: 100%;
  margin: ${props => (props.pullUp ? "-64px auto 64px" : "64px 0")};
  position: relative;
`

const Article = ({ data, location }) => {
  const [activeTab, setActiveTab] = useState(
    data.contentfulArticle.mediaCollection &&
      data.contentfulArticle.mediaCollection.mediaItemCollections[0] &&
      data.contentfulArticle.mediaCollection.mediaItemCollections[0].id
  )
  return (
    <Layout location={location}>
      <ResponsiveContainer verticalInset="none">
        <Stack scale="xl">
          <Hero>
            <Hero.ImageWithGradient>
              <Img
                fluid={data.contentfulArticle.heroSection.heroImage.fluid}
                alt={data.contentfulArticle.heroSection.title}
              />
              <Hero.Gradient />
            </Hero.ImageWithGradient>
            {data.contentfulArticle.mediaCollection && (
              <Hero.Title>
                <Stack scale="l">
                  <Headline.XXL isOnDarkBackground>
                    {data.contentfulArticle.heroSection.title}
                  </Headline.XXL>
                  <TabBar activeTab={activeTab}>
                    {data.contentfulArticle.mediaCollection.mediaItemCollections.map(
                      mediaItemCollection => (
                        <TabBar.Tab
                          tabName={mediaItemCollection.id}
                          onClick={setActiveTab}
                        >
                          {mediaItemCollection.title}
                        </TabBar.Tab>
                      )
                    )}
                  </TabBar>
                </Stack>
              </Hero.Title>
            )}
          </Hero>
          <TextLayout pullUp={!data.contentfulArticle.mediaCollection}>
            <Stack scale="xl">
              {!data.contentfulArticle.mediaCollection && (
                <Headline.XXL isOnDarkBackground>
                  {data.contentfulArticle.heroSection.title}
                </Headline.XXL>
              )}
              {data.contentfulArticle.mediaCollection &&
                data.contentfulArticle.mediaCollection.mediaItemCollections.map(
                  mediaItemsCollection => {
                    if (mediaItemsCollection.id !== activeTab) {
                      return null
                    }
                    if (
                      mediaItemsCollection.__typename ===
                      "ContentfulImageCollection"
                    ) {
                      return (
                        <ImageGrid
                          key={mediaItemsCollection.id}
                          images={mediaItemsCollection.images}
                        />
                      )
                    }
                    return (
                      <Stack key={mediaItemsCollection.id} scale="xl">
                        {mediaItemsCollection.songs.map(song => (
                          <Stack>
                            <Headline.S isOnDarkBackground>
                              {song.title}
                            </Headline.S>
                            <Text.Body isOnDarkBackground>
                              {song.description}
                            </Text.Body>
                            <audio controls="controls" key={song.id}>
                              Your browser does not support the{" "}
                              <code>audio</code> element.
                              <source src={song.file.url} type="audio/mpeg" />
                            </audio>
                          </Stack>
                        ))}
                      </Stack>
                    )
                  }
                )}
              {data.contentfulArticle.content && (
                <Text.Body isOnDarkBackground>
                  {documentToReactComponents(
                    data.contentfulArticle.content.json,
                    {
                      renderNode: {
                        [BLOCKS.QUOTE]: (node, children) => (
                          <Text.Quote>{children}</Text.Quote>
                        ),
                        [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
                          const Component =
                            ComponentMap[
                              node.data.target.sys.contentType.sys.id
                            ]
                          return <Component {...node.data.target.fields} />
                        },
                      },
                    }
                  )}
                </Text.Body>
              )}
            </Stack>
          </TextLayout>
        </Stack>
      </ResponsiveContainer>
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Article

export const ArticleQuery = graphql`
  query ArticleQuery($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      heroSection {
        title
        heroImage {
          fluid(maxWidth: 900) {
            ...GatsbyContentfulFluid
          }
        }
      }
      content {
        json
      }
      mediaCollection {
        mediaItemCollections {
          __typename
          ... on ContentfulImageCollection {
            id
            title
            images {
              id
              description
              fixed(width: 250) {
                ...GatsbyContentfulFixed
              }
              resize(width: 2000, quality: 100) {
                src
              }
            }
          }
          ... on ContentfulSongCollection {
            id
            title
            songs {
              id
              title
              description
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`
