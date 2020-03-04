import { useState, useEffect } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useInfiniteScroll = (callback: any) => {
  const [isFetchingMore, setIsFetchingMore] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
        isFetchingMore
      ) {
        return
      }

      setIsFetchingMore(true)
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
