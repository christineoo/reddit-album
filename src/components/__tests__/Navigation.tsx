import * as React from "react"
import { cleanup, render } from "react-testing-library"

import Navigation, { SUBREDDITS } from "../Navigation"

afterEach(cleanup)

describe("Navigation Component", () => {
  test("value and label of navigation", () => {
    const { getByTestId } = render(<Navigation />)
    SUBREDDITS.map((subreddit) => {
      expect(getByTestId(subreddit.value).textContent).toEqual(subreddit.label)
    })
  })

  test("href value is prefix with `/r/`", () => {
    const { getByTestId } = render(<Navigation />)
    SUBREDDITS.map((subreddit) => {
      expect(getByTestId(subreddit.value).getAttribute("href")).toEqual(`/r/${subreddit.value}`)
    })
  })
})
