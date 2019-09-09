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

    const imgContainerClass = classNames({
      "img-container": true,
      "load-error": imageStatus === "error",
      loaded: imageStatus === "loaded"
    })

    return (
      <div className={imgContainerClass} onClick={() => this.props.onClick(index)}>
        <div className="content">
          <img src={img.url} {...img} onLoad={this.handleImageLoaded} onError={this.handleImageError} />
          <div className="content-details">
            <span>{photo.alt}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image
