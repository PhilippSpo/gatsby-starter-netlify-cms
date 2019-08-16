import Img from "gatsby-image"
import React, { useState } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"
import styled from "styled-components"

const StyledImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 150px;
  grid-gap: 16px;
`

const ImageGrid = props => {
  const [lightboxIsOpen, toggleLightbox] = useState(false)
  const [selectedLightboxImage, setSelectedLightboxImage] = useState(0)
  const gotoPrevLightboxImage = () => {
    setSelectedLightboxImage(Math.max(0, selectedLightboxImage - 1))
  }
  const gotoNextLightboxImage = () => {
    setSelectedLightboxImage(
      Math.min(props.images.length, selectedLightboxImage + 1)
    )
  }
  return (
    <React.Fragment>
      <StyledImageGrid>
        {props.images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => {
              setSelectedLightboxImage(index)
              toggleLightbox(true)
            }}
          >
            <Img
              fixed={image.fixed}
              alt={image.title}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </StyledImageGrid>
      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal onClose={() => toggleLightbox(!lightboxIsOpen)}>
            <Carousel
              views={[
                ...props.images.map(image => ({
                  src: image.resize.src,
                  caption: image.description,
                })),
              ]}
              onClickPrev={gotoPrevLightboxImage}
              onClickNext={gotoNextLightboxImage}
              currentIndex={selectedLightboxImage}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </React.Fragment>
  )
}

export default ImageGrid
