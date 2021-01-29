import React, { useState, useEffect } from "react"
// CSS
// import * as styles from "./styles"
import "./styles.css"
// Components
import Uploader from "./Uploader.js"
import ImageArea from "./ImageArea.js"

interface AppProps {}

export default function App({}: AppProps): JSX.Element {
  const [images, setImages] = useState([])

  useEffect(() => {
    console.log("images are ", images)
  }, [images])

  return (
    <div className="wrapper__main">
      <Uploader setImages={setImages} />
      <ImageArea images={images} />
    </div>
  )
}
