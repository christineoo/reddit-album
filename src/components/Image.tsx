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
  readonly imageStatus: "loading" | "loaded"
}

class Image extends React.Component<Props> {
  readonly state: State = {
    imageStatus: "loading"
  }

  readonly handleImageLoaded = () => {
    this.setState({ imageStatus: "loaded" })
  }

  render() {
    console.log("props: ", this.props)
    const { photo } = this.props
    const { imageStatus } = this.state

    const imgContainerClass = classNames({
      "img-container": true,
      loaded: imageStatus === "loaded"
    })
    return (
      <div className={imgContainerClass}>
        <div className="content">
          <img {...photo} onLoad={this.handleImageLoaded} />
          <div className="content-details">
            <p>{photo.title}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Image
