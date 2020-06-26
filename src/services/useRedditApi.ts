import { useEffect, useState } from "react"
import { filteredData } from "../utils/dataFilterHelper"

export interface ImageData {
  height: number
  src: string
  title: string
  url: string
  width: number
  alt: string
}

export const useRedditApi = (subreddit: string | undefined) => {
  const ROOT_PATH = "https://www.reddit.com"

  const [after, setAfter] = useState("")
  const [data, setData] = useState<ImageData[]>()
  const [path, setPath] = useState(subreddit ? `/r/${subreddit}.json` : `/r/itookapicture.json`)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      const regexp = /\bafter/g
      const isLoadingMore = regexp.test(path)

      if (isLoadingMore) {
        setIsLoadingMore(true)
      } else {
        setIsLoading(true)
      }

      try {
        const response = await fetch(`${ROOT_PATH}${path}`)
        if (!response.ok) {
          throw Error("fetch error")
        }
        const json = await response.json()
        const imageData = filteredData(json.data.children)

        setData(imageData)
        setAfter(json.data.after)
      } catch (error) {
        setIsError(true)
      }
      if (isLoadingMore) {
        setIsLoadingMore(false)
      } else {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [path])

  return { data, after, isLoading, isLoadingMore, setPath }
}
