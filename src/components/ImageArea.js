import React from "react"
// Components
import Image from "./Image"

const ImageArea = ({ images, handleDelete }) => {
  // Map the images
  const renderImages = () => {
    return images.map((image, index) => (
      <Image
        image={image}
        key={image.data}
        index={index}
        handleDelete={handleDelete}
      />
    ))
  }

  return (
    <div className="image-area__main">
      <div className="image-area__wrapper">
        <div className="image-area__grid">{images && renderImages()}</div>
      </div>
    </div>
  )
}

export default ImageArea
