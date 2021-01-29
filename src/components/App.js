import React, { useState, useEffect } from "react"
// CSS
// import * as styles from "./styles"
import "./styles.css"
// Components
import Uploader from "./Uploader.js"
import ImageArea from "./ImageArea.js"

export default function App() {
  const [images, setImages] = useState([])

  // just to make sure it's working
  useEffect(() => {
    console.log("images are ", images)
  }, [images])

  // Delete an image
  const handleDelete = i => {
    setImages(images.filter((image, index) => i !== index))
  }

  return (
    <div className="app">
      <div className="app__main">
        <Uploader setImages={setImages} />
        <ImageArea images={images} handleDelete={handleDelete} />
      </div>
    </div>
  )
}
