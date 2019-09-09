import classNames from "classnames"
import * as React from "react"
import { ImageData } from "../services/useRedditApi"

interface Props {
  readonly index: number
  readonly photo: ImageData
  readonly onClick: (index: number) => void
}

type ImageStatus = "loading" | "loaded" | "error"

const Image = ({ photo, index, onClick }: Props) => {
  const [imageStatus, setImageStatus] = React.useState<ImageStatus>("loading")

  const imgContainerClass = classNames({
    "img-container": true,
    "load-error": imageStatus === "error",
    loaded: imageStatus === "loaded"
  })

  return (
    <div className={imgContainerClass} onClick={() => onClick(index)}>
      <div className="content">
        <img {...photo} onLoad={() => setImageStatus("loaded")} onError={() => setImageStatus("error")} />
        <div className="content-details">
          <span>{photo.title}</span>
        </div>
      </div>
    </div>
  )
}

export default Image
