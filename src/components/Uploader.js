import React from "react"

const Uploader = ({ setImages }) => {
  // Create new image object, set images array (add to end of array)
  const handleImage = (data, filename) => {
    const newImage = { imageData: data, filename: filename }
    setImages(prevImages => [...prevImages, newImage])
  }

  // Handle Upload
  const handleUpload = e => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = function (event) {
      console.log("file result =", event.target.result)
      handleImage(event.target.result, file.name)
    }
    reader.readAsDataURL(file)
  }

  // JSX
  const uploaderJSX = (
    <div className="uploader__main">
      <div className="uploader__input-wrap">
        <span className="uploader__input-header">Upload an Image</span>
        <label className="uploader__custom-input">
          <input type="file" onChange={e => handleUpload(e)} />
          Browse Files
        </label>
      </div>
    </div>
  )

  return uploaderJSX
}

export default Uploader
