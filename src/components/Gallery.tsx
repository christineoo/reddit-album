import { RouteComponentProps } from "@reach/router"
import * as React from "react"

type Props = RouteComponentProps<{ subreddit: string }>

class Gallery extends React.Component<Props> {
  render() {
    const { subreddit } = this.props
    return (
      <>
        <h2>Gallery {subreddit}</h2>
      </>
    )
  }
}

export default Gallery
