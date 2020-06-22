import { useState, useEffect } from "react"

const useInfiniteScroll = (callback: () => void) => {
  const [isFetchingMore, setIsFetchingMore] = useState(false)
  const OFFSET_FROM_BOTTOM = 500

  useEffect(() => {
    const handleScroll = () => {
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
      const windowBottom = windowHeight + window.pageYOffset + OFFSET_FROM_BOTTOM
      if (windowBottom >= docHeight) {
        setIsFetchingMore(true)
      } else {
        setIsFetchingMore(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isFetchingMore])

  useEffect(() => {
    if (!isFetchingMore) return
    callback()
  }, [callback, isFetchingMore])

  return { isFetchingMore, setIsFetchingMore }
}

export default useInfiniteScroll
