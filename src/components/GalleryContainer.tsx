import { RouteComponentProps } from "@reach/router"
import * as React from "react"
import Navigation, { SUBREDDITS } from "./Navigation"
import Gallery from "react-photo-gallery"
import Image from "./Image"
import Lightbox from "react-images"
import LoadingBar from "./LoadingBar"
import { NotFound } from "../App"
import { useRedditApi, ImageData } from "../services/useRedditApi"

type Props = RouteComponentProps<{ readonly subreddit: string }>

const GalleryContainer = ({ subreddit }: Props) => {
  const [isValidSubreddit, setIsValidSubreddit] = React.useState(false)
  const [lightboxIsOpen, setLightboxIsOpen] = React.useState(false)
  const [currentImage, setCurrentImage] = React.useState(0)
  const [imagesData, setImages] = React.useState()

  const { data, after, isLoading, isLoadingMore, setPath } = useRedditApi(subreddit)

  const validateAndSetSubreddit = (subreddit?: string) => {
    const isValidSubreddit = !!SUBREDDITS.find((sub) => sub.value === subreddit)
    setIsValidSubreddit(isValidSubreddit)
  }

  React.useEffect(() => {
    validateAndSetSubreddit(subreddit)
    const path = subreddit ? `/r/${subreddit}.json` : "/r/itookapicture.json"
    setPath(path)
    // Reset the images to [] when a different subreddit is selected
    setImages([])
  }, [subreddit])

  React.useEffect(() => {
    if (!isLoading && data && data !== imagesData) {
      setImages(data)
    }
  }, [isLoading])

  React.useEffect(() => {
    if (!isLoadingMore && data && data !== imagesData) {
      setImages((prevState: ImageData[]) => {
        return prevState.concat(data)
      })
    }
  }, [isLoadingMore])

  // add/remove scroll listener to auto load more images
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return

    if (!isLoadingMore) {
      const path = subreddit && after ? `/r/${subreddit}.json?after=${after}` : "/r/itookapicture.json"

      setPath(path)
    }
  }

  const closeLightbox = () => {
    setLightboxIsOpen(false)
  }

  const gotoPrevious = () => {
    if (currentImage === 0) {
      return
    }
    setCurrentImage(currentImage - 1)
  }

  const gotoNext = () => {
    if (currentImage === imagesData.length - 1) {
      return
    }
    setCurrentImage(currentImage + 1)
  }

  const handleOnClick = (index: number) => {
    setLightboxIsOpen(true)
    setCurrentImage(index)
  }

  const renderImageComponent = (props: any) => {
    return (
      <Image key={props.index} photo={props.photo} index={props.index} onClick={() => handleOnClick(props.index)} />
    )
  }

  const images = imagesData
    ? imagesData.map((d: ImageData) => {
        return { caption: d.title, src: d.src }
      })
    : []

  if (!isValidSubreddit && !!imagesData) {
    return <NotFound />
  }

  return (
    <div className="gallery">
      <Navigation />
      {isLoading && <LoadingBar />}
      {!isLoading && imagesData && imagesData.length === 0 && (
        <div className="centered-container">
          <h1>No photos yet 🏖️</h1>
        </div>
      )}
      {!isLoading && imagesData && <Gallery photos={imagesData} renderImage={renderImageComponent} />}
      {!isLoading && (
        <Lightbox
          backdropClosesModal={true}
          currentImage={currentImage}
          images={images}
          isOpen={lightboxIsOpen}
          onClickPrev={gotoPrevious}
          onClickNext={gotoNext}
          onClose={closeLightbox}
          spinner={LoadingBar}
        />
      )}
    </div>
  )
}

export default GalleryContainer
