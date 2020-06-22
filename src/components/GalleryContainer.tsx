import { RouteComponentProps } from "@reach/router"
import * as React from "react"
import Gallery, { RenderImageProps, PhotoProps } from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

import Image from "./Image"
import Navigation, { SUBREDDITS } from "./Navigation"
import LoadingBars from "./LoadingBars"
import { ErrorPage, NotFound } from "../App"

import { filteredData } from "../utils/dataFilterHelper"
import useInfiniteScroll from "./useInfiniteScroll"

type Props = RouteComponentProps<{ readonly subreddit: string }>
type CustomPhotoProps = PhotoProps<{ title: string; url: string }>

export interface ImageData {
  readonly author: string
  readonly height: number
  readonly src: string
  readonly title: string
  readonly url: string
  readonly width: number
  readonly alt: string
}

const GalleryContainer = ({ subreddit }: Props) => {
  const [data, setData] = React.useState<CustomPhotoProps[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [after, setAfter] = React.useState("")
  const [isValidSubreddit, setIsValidSubreddit] = React.useState(false)
  const [lightboxIsOpen, setLightboxIsOpen] = React.useState(false)
  const [currentImage, setCurrentImage] = React.useState(0)
  const [isError, setIsError] = React.useState(false)

  const validateSubreddit = React.useCallback(() => {
    const isValidSubreddit = !!SUBREDDITS.find((sub) => sub.value === subreddit)
    setIsValidSubreddit(isValidSubreddit)
    return isValidSubreddit
  }, [subreddit])

  const { setIsFetchingMore } = useInfiniteScroll(async () => {
    if (subreddit && validateSubreddit()) {
      setIsFetchingMore(true)

      try {
        const result = await fetch(`https://www.reddit.com/r/${subreddit}.json?after=${after}`)
        if (!result.ok) {
          throw Error("fetch error")
        }
        const json = await result.json()
        setIsFetchingMore(false)
        const imageData = filteredData(json.data.children)

        setData((prev) => prev.concat(imageData))
        setAfter(json.data.after)
      } catch (_error) {
        setIsError(true)
      }
    }
  })

  React.useEffect(() => {
    const fetchData = async () => {
      if (subreddit && validateSubreddit()) {
        setIsLoading(true)
        const result = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
        const json = await result.json()
        setIsLoading(false)
        const imageData = filteredData(json.data.children)

        setData(imageData)
        setAfter(json.data.after)
      }
    }
    fetchData()
  }, [subreddit, validateSubreddit])

  const openLightbox = React.useCallback((index) => {
    setLightboxIsOpen(true)
    setCurrentImage(index)
  }, [])

  const closeLightbox = () => {
    setLightboxIsOpen(false)
  }

  const renderImageComponent = (props: RenderImageProps) => {
    return <Image key={props.index} photo={props.photo} index={props.index} onClick={openLightbox} />
  }

  if (isError) {
    return <ErrorPage />
  }

  return (
    <div className="gallery">
      <Navigation />
      {isValidSubreddit ? (
        <>
          {isLoading && <LoadingBars />}
          {!isLoading && data && data.length == 0 && (
            <div className="centered-container">
              <h1>No photos yet 🏖️ </h1>
            </div>
          )}
          {!isLoading && data && data.length > 0 && <Gallery photos={data} renderImage={renderImageComponent} />}
        </>
      ) : (
        <NotFound />
      )}
      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={data.map((i: CustomPhotoProps) => ({
                ...i,
                caption: i.title,
                src: i.url
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default GalleryContainer
