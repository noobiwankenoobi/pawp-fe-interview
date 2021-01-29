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
      <input type="file" onChange={e => handleUpload(e)} />
    </div>
  )

  return uploaderJSX
}

export default Uploader
