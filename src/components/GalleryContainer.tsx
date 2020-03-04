import { RouteComponentProps } from "@reach/router"
import * as React from "react"
import Gallery from "react-photo-gallery"

import Image from "./Image"
import Navigation, { SUBREDDITS } from "./Navigation"
import { filteredData } from "../utils/dataFilterHelper"
import LoadingBars from "./LoadingBars"
import useInfiniteScroll from "./useInfiniteScroll"
import { NotFound } from "../App"

type Props = RouteComponentProps<{ readonly subreddit: string }>

export interface ImageData {
  readonly author: string
  readonly height: number
  readonly src: string
  readonly title: string
  readonly url: string
  readonly width: number
}

const GalleryContainer = ({ subreddit }: Props) => {
  const [data, setData] = React.useState()
  const [isLoading, setIsLoading] = React.useState(false)
  const [after, setAfter] = React.useState("")
  const [isValidSubreddit, setIsValidSubreddit] = React.useState(false)

  const validateSubreddit = React.useCallback(() => {
    const isValidSubreddit = !!SUBREDDITS.find((sub) => sub.value === subreddit)
    setIsValidSubreddit(isValidSubreddit)
    return isValidSubreddit
  }, [subreddit])

  const { setIsFetchingMore } = useInfiniteScroll(async () => {
    if (subreddit && validateSubreddit()) {
      setIsFetchingMore(true)
      const result = await fetch(`https://www.reddit.com/r/${subreddit}.json?after=${after}`)
      const json = await result.json()
      setIsFetchingMore(false)
      const imageData = filteredData(json.data.children)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setData((prev: any) => prev.concat(imageData))
      setAfter(json.data.after)
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

  //  eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderImageComponent = (props: any) => {
    return (
      <Image
        key={props.index}
        photo={props.photo}
        index={props.index}
        onClick={() => console.log("index: ", props.index)}
        //  onClick={() => handleOnClick(props.index)}
      />
    )
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
    </div>
  )
}

export default GalleryContainer
