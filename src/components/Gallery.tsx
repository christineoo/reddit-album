import { RouteComponentProps } from "@reach/router"
import { pick } from "lodash-es"
import * as React from "react"

type Props = RouteComponentProps<{ readonly subreddit: string }>
interface State {
  readonly data: ReadonlyArray<string>
  readonly apiError: boolean
}

class Gallery extends React.Component<Props> {
  readonly state: State = {
    apiError: false,
    data: []
  }

  async fetchData(subreddit?: string) {
    const url = subreddit ? `http://www.reddit.com/r/${subreddit}.json` : "http://www.reddit.com/r/pic.json"
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw Error("fetch error")
      }
      const res = await response.json()
      this.setState({ data: res.data.children.map((child: any) => pick(child.data, "url", "name", "author")) })
    } catch (error) {
      this.setState({ apiError: true })
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps: Props) {
    const { subreddit } = this.props

    if (prevProps.subreddit !== subreddit) {
      this.fetchData(subreddit)
    }
  }

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
