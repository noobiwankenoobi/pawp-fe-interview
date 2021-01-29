import React, { useState } from "react"
// CSS
// import * as styles from "./styles"
import "./styles.css"
// Components
import Uploader from "./Uploader.js"
import ImageGrid from "./ImageGrid.js"

interface AppProps {}

export default function App({}: AppProps): JSX.Element {
  const [images, setImages] = useState([])

  const uploadImage = () => {
    console.log("upload")
  }

  return (
    <div className="wrapper__main">
      <Uploader uploadImage={uploadImage} />
      <ImageGrid images={images} />
    </div>
  )
}
