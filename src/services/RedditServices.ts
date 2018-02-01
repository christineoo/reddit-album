export default class RedditServices {
  static readonly DEFAULT_PATH = "http://www.reddit.com/r/pic.json"

  static async fetchData(url?: string) {
    const response = await fetch(url ? url : this.DEFAULT_PATH)

    const res = await response.json()

    return res
  }
}
