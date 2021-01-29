import React from "react"

function Image({ image }) {
  return (
    <div className="image__main">
      <img src={image.imageData} alt="uploaded-img" />
      <div className="image__filename">{image.filename}</div>
    </div>
  )
}

export default Image
