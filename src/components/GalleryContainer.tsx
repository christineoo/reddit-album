import { RouteComponentProps } from "@reach/router"
import * as React from "react"
import Lightbox from "react-images"
import ReactLoading from "react-loading"
import Gallery, { PhotoProps } from "react-photo-gallery"

import { NotFound } from "../App"
import RedditServices from "../services/RedditServices"
import { filteredData } from "../utils/dataFilterHelper"

import Image from "./Image"
import Navigation, { SUBREDDITS } from "./Navigation"

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
  readonly isValidSubreddit: boolean
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
    lightboxIsOpen: false,
    isValidSubreddit: false
  }

  async fetchData(subreddit?: string) {
    const isValidSubreddit = !!SUBREDDITS.find((sub) => sub.value === subreddit)
    this.setState({ isFetching: true, isValidSubreddit })

    if (!isValidSubreddit) {
      this.setState({ isFetching: false })
      return
    }
    try {
      const response = await RedditServices.fetchData(subreddit)
      if (!response.ok) {
        throw Error("fetch error")
      }
      const res = await response.json()
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
    this.fetchData(subreddit)

    window.addEventListener("scroll", this.handleScroll)
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

    this.setState({ isFetchingMoreData: true })

    try {
      const response = await RedditServices.fetchData(subreddit, after)
      if (!response.ok) {
        throw Error("fetch error")
      }
      const res = await response.json()
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly renderImageComponent = (props: any) => {
    return <Image key={props.index} photo={props.photo} index={props.index} onClick={this.handleOnClick} />
  }

  render() {
    const { currentImage, data, lightboxIsOpen, isFetching, isValidSubreddit } = this.state
    const LoadingBars = () => <ReactLoading type="bars" color="#b9c8d0" />

    if (!isValidSubreddit) {
      return <NotFound />
    }

    // src is from a lower resolution image
    // tslint:disable-next-line:readonly-array
    const photos: Array<PhotoProps<{ readonly title: string }>> = data.map((d: ImageData, index: number) => {
      return { height: d.height, src: d.url, title: d.title, width: d.width, key: `${index}` }
    })

    // src is from a higher resolution image
    const images = data.map((d: ImageData) => {
      return { caption: d.title, src: d.src }
    })

    return (
      <div className="gallery">
        <Navigation />
        {isFetching ? (
          <div className="loading-container">
            <LoadingBars />
          </div>
        ) : data.length === 0 ? (
          <div className="centered-container">
            <h1>No photos...</h1>
          </div>
        ) : (
          <>
            <Gallery photos={photos} renderImage={this.renderImageComponent} />
            <Lightbox
              backdropClosesModal={true}
              currentImage={currentImage}
              images={images}
              isOpen={lightboxIsOpen}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              onClose={this.closeLightbox}
              spinner={LoadingBars}
            />
          </>
        )}
      </div>
    )
  }
}

export default GalleryContainer
