import React from "react"
// useHover
import useHover from "./useHover"
// React feather
import { Trash } from "react-feather"

function Image({ image, index, handleDelete }) {
  const [hoverRef, isHovered] = useHover()

  const deleteBtn = (
    <div
      className="image__delete-btn"
      onClick={() => handleDelete(index)}
      role="button"
    >
      <Trash
        fill="white"
        stroke="white"
        size="20"
        className="image__trash-icon"
      />
    </div>
  )

  // Div that overlays on top of image card when hovering
  const hoverDiv = (
    <div
      className="image__hover-div"
      style={{ display: `${isHovered ? "flex" : "none"}` }}
    >
      {deleteBtn}
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
