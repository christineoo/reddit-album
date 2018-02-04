export default class RedditServices {
  static fetchData(subreddit?: string, after?: string) {
    return fetch(this.urlPath(subreddit, after))
  }

  static urlPath(subreddit?: string, after?: string) {
    const ROOT_PATH = "https://www.reddit.com"
    const DEFAULT_SUBREDDIT = "pic"
    const DEFAULT_PATH = `${ROOT_PATH}/r/${DEFAULT_SUBREDDIT}.json`
    return subreddit && after
      ? `${ROOT_PATH}/r/${subreddit}.json?after=${after}`
      : subreddit
      ? `${ROOT_PATH}/r/${subreddit}.json`
      : DEFAULT_PATH
  }
}
