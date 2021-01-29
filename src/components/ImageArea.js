import React from "react"
// Components
import Image from "./Image"

const ImageArea = ({ images }) => {
  const renderImages = () => {
    return images.map(image => <Image image={image} />)
  }

  const imageArea = (
    <div className="image-area__main">
      <div className="image-area__wrapper">
        <div className="image-area__grid">{images && renderImages()}</div>
      </div>
    </div>
  )
  return imageArea
}

export default ImageArea
