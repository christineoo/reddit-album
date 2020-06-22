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
interface State {
  readonly imageStatus: "loading" | "loaded" | "error"
}

class Image extends React.Component<Props, State> {
  readonly state: State = {
    imageStatus: "loading"
  }

  readonly handleImageLoaded = () => {
    this.setState({ imageStatus: "loaded" })
  }

  readonly handleImageError = () => {
    this.setState({ imageStatus: "error" })
  }

  render() {
    const { index, photo } = this.props
    const { imageStatus } = this.state

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
    )
  }
}

export default Image
