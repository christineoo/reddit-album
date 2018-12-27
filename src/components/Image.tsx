import classNames from "classNames"
import * as React from "react"

interface PhotoProps {
  readonly height: number
  readonly url: string
  readonly width: number
  readonly title: string
}
interface Props {
  readonly photo: PhotoProps
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
    const { photo } = this.props
    const { imageStatus } = this.state

    const imgContainerClass = classNames({
      "img-container": true,
      "load-error": imageStatus === "error",
      loaded: imageStatus === "loaded"
    })
    return (
      <div className={imgContainerClass}>
        <div className="content">
          <img {...photo} onLoad={this.handleImageLoaded} onError={this.handleImageError} />
          <div className="content-details">
            <span>{photo.title}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Image
