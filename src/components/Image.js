import React from "react"
// useHover
import useHover from "./useHover"
// React feather
import { Trash } from "react-feather"

function Image({ image }) {
  const [hoverRef, isHovered] = useHover()

  const hoverDiv = (
    <div
      className="image__hover-div"
      style={{ display: `${isHovered ? "flex" : "none"}` }}
    >
      <div className="image__delete-btn">
        <Trash
          fill="white"
          size="20"
          stroke="#4a5568"
          className="image__trash-icon"
        />
      </div>
    </div>
  )

  return (
    <div className="image__main" ref={hoverRef}>
      {hoverDiv}
      <div className="image__img-container">
        <img src={image.imageData} alt="uploaded-img" className="image__img" />
      </div>
      <div className="image__filename">{image.filename}</div>
    </div>
  )
}

export default Image
