import { RouteComponentProps } from "@reach/router"
import { pick } from "lodash-es"
import * as React from "react"
import Gallery from "react-photo-gallery"

import Image from "./Image"
import Navigation from "./Navigation"

type Props = RouteComponentProps<{ readonly subreddit: string }>
interface State {
  readonly data: ReadonlyArray<{ readonly url: string }>
  readonly apiError: boolean
  readonly isFetching: boolean
}

class GalleryContainer extends React.Component<Props> {
  readonly state: State = {
    apiError: false,
    data: [],
    isFetching: false
  }

  async fetchData(subreddit?: string) {
    const url = subreddit ? `http://www.reddit.com/r/${subreddit}.json` : "http://www.reddit.com/r/pic.json"
    this.setState({ isFetching: true })

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw Error("fetch error")
      }
      const res = await response.json()
      const data = res.data.children
        .filter((child: any) => child.data.url.match(/\.(jpeg|jpg|gif|png)$/) != null)
        .map((item: any) => {
          const dimension = item.data.preview.images.map((image: any) => ({
            height: image.source.height,
            width: image.source.width
          }))[0]

          return {
            ...pick(item.data, "url", "name", "author", "title"),
            height: dimension.height,
            width: dimension.width
          }
        })

      this.setState({ data, isFetching: false })
    } catch (error) {
      this.setState({ apiError: true, isFetching: false })
    }
  }

  componentDidMount() {
    const { subreddit } = this.props

    this.fetchData(subreddit)
  }

  componentDidUpdate(prevProps: Props) {
    const { subreddit } = this.props

    if (prevProps.subreddit !== subreddit) {
      window.scrollTo(0, 0)
      this.fetchData(subreddit)
    }
  }

  render() {
    const { data } = this.state

    if (data.length === 0) {
      return null
    }

    return (
      <div className="gallery">
        <Navigation />

        <Gallery
          photos={data.map((d: any, i: number) => {
            return {
              height: d.height,
              src: d.url,
              title: d.title,
              width: d.width
            }
          })}
          columns={5}
          ImageComponent={Image}
        />
      </div>
    )
  }
}

export default GalleryContainer
