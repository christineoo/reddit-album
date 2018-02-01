import { RouteComponentProps } from "@reach/router"
import * as React from "react"
import Lightbox from "react-images"
import ReactLoading from "react-loading"
import Gallery, { GalleryProps, PhotoProps } from "react-photo-gallery"

import RedditServices from "../services/RedditServices"
import { filteredData } from "../utils/dataFilterHelper"

import Image from "./Image"
import Navigation from "./Navigation"

type Props = RouteComponentProps<{ readonly subreddit: string }>

export interface ImageData {
  readonly author: string
  readonly height: number
  readonly src: string
  readonly title: string
  readonly url: string
  readonly width: number
}

interface State {
  readonly after: string
  readonly currentImage: number
  // tslint:disable-next-line:readonly-array
  readonly data: ImageData[]
  readonly apiError: boolean
  readonly isBottomReached: boolean
  readonly isFetching: boolean
  readonly isFetchingMoreData: boolean
  readonly lightboxIsOpen: boolean
}

export interface CustomPhotoProps extends PhotoProps {
  readonly title: string
}

class GalleryContainer extends React.Component<Props> {
  readonly OFFSET_FROM_BOTTOM = 200
  readonly state: State = {
    after: "",
    apiError: false,
    currentImage: 0,
    data: [],
    isBottomReached: false,
    isFetching: false,
    isFetchingMoreData: false,
    lightboxIsOpen: false
  }

  async fetchData(subreddit?: string) {
    const url = subreddit ? `http://www.reddit.com/r/${subreddit}.json` : "http://www.reddit.com/r/pic.json"
    this.setState({ isFetching: true })
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw Error("fetch error")
      }
      const res = await RedditServices.fetchData(url)
      const imageData = filteredData(res.data.children)
      this.setState({
        after: res.data.after,
        data: imageData,
        isFetching: false
      })
    } catch (error) {
      this.setState({ apiError: true, isFetching: false })
    }
  }

  componentDidMount() {
    const { subreddit } = this.props
    window.addEventListener("scroll", this.handleScroll)

    this.fetchData(subreddit)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  componentDidUpdate(prevProps: Props) {
    const { subreddit } = this.props

    if (prevProps.subreddit !== subreddit) {
      // scroll to top when a new navigation item is selected
      window.scrollTo(0, 0)
      this.fetchData(subreddit)
    }
  }

  async fetchMoreData() {
    const { subreddit } = this.props
    const { after, data, isFetching, isFetchingMoreData } = this.state

    if (isFetching || isFetchingMoreData) {
      return
    }

    const url = subreddit
      ? `http://www.reddit.com/r/${subreddit}.json?after=${after}`
      : `http://www.reddit.com/r/pic.json?after=${after}`
    this.setState({ isFetchingMoreData: true })

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw Error("fetch error")
      }
      const res = await RedditServices.fetchData(url)
      const moreData = filteredData(res.data.children)
      this.setState({
        after: res.data.after,
        data: data.concat(moreData),
        isFetchingMoreData: false
      })
    } catch (error) {
      this.setState({ apiError: true, isFetchingMoreData: false })
    }
  }

  readonly handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )
    const windowBottom = windowHeight + window.pageYOffset + this.OFFSET_FROM_BOTTOM
    if (windowBottom >= docHeight) {
      this.setState({ isBottomReached: true })
      this.fetchMoreData()
    } else {
      this.setState({
        isBottomReached: false
      })
    }
  }

  readonly handleOnClick = (index: number) => {
    this.setState({ lightboxIsOpen: true, currentImage: index })
  }

  readonly gotoPrevious = () => {
    const { currentImage } = this.state

    if (currentImage === 0) {
      return
    }
    this.setState({ currentImage: currentImage - 1 })
  }

  readonly gotoNext = () => {
    const { currentImage, data } = this.state

    if (currentImage === data.length - 1) {
      return
    }
    this.setState({ currentImage: currentImage + 1 })
  }

  readonly closeLightbox = () => {
    this.setState({ lightboxIsOpen: false })
  }

  readonly renderImageComponent = (props: any) => {
    return <Image key={props.index} photo={props.photo} index={props.index} onClick={this.handleOnClick} />
  }

  render() {
    const { currentImage, data, lightboxIsOpen, isFetching } = this.state

    if (data.length === 0 && !isFetching) {
      return <h1>No photos...</h1>
    }

    // src is from a lower resolution image
    const photos = data.map((d: ImageData, index: number) => {
      return { caption: d.title, height: d.height, src: d.url, title: d.title, width: d.width, key: index }
    })

    // src is from a higher resolution image
    const images = data.map((d: ImageData, index: number) => {
      return { caption: d.title, height: d.height, src: d.src, title: d.title, width: d.width, key: index }
    })

    const LoadingComponent = () => <ReactLoading type="bars" color="#b9c8d0" />

    return (
      <div className="gallery">
        <Navigation />
        {isFetching ? (
          <div className="loading-container">
            <LoadingComponent />
          </div>
        ) : (
          <>
            <Gallery photos={photos} ImageComponent={this.renderImageComponent} />
            <Lightbox
              currentImage={currentImage}
              images={images}
              isOpen={lightboxIsOpen}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              onClose={this.closeLightbox}
              spinner={LoadingComponent}
            />
          </>
        )}
      </div>
    )
  }
}

export default GalleryContainer
