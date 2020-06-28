import classNames from "classnames"
import * as React from "react"
import { PhotoProps } from "react-photo-gallery"

export type PhotoType = Pick<
  PhotoProps<{ title: string; url: string }>,
  "src" | "alt" | "title" | "width" | "height" | "url"
>

interface Props {
  readonly index: number
  readonly photo: PhotoProps
  readonly onClick: (index: number) => void
}

type ImageStatus = "loading" | "loaded" | "error"

const Image = ({ photo, index, onClick }: Props) => {
  const [imageStatus, setImageStatus] = React.useState<ImageStatus>("loading")

  const img = photo as PhotoType
  const { url, width, height, alt, title } = img

  const imgContainerClass = classNames({
    "img-container": true,
    "load-error": imageStatus === "error",
    loaded: imageStatus === "loaded"
  })

  const handleImageLoaded = () => {
    setImageStatus("loaded")
  }

  const handleImageError = () => {
    setImageStatus("error")
  }

  return (
    <div className={imgContainerClass} onClick={() => onClick(index)}>
      <div className="content">
        <img src={url} height={height} width={width} alt={alt} onLoad={handleImageLoaded} onError={handleImageError} />
        <div className="content-details">
          <span>{title}</span>
        </div>
      </div>
    </div>
  )
}

export default Image
