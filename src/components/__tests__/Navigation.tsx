import * as React from "react"
import { cleanup, render, screen } from "@testing-library/react"

import Navigation, { SUBREDDITS } from "../Navigation"

afterEach(cleanup)

describe("Navigation Component", () => {
  test("value and label of navigation", () => {
    render(<Navigation />)
    SUBREDDITS.map((subreddit) => {
      expect(screen.getByTestId(subreddit.value).textContent).toEqual(subreddit.label)
    })
  })

  test("href value is prefix with `/r/`", () => {
    render(<Navigation />)
    SUBREDDITS.map((subreddit) => {
      expect(screen.getByTestId(subreddit.value).getAttribute("href")).toEqual(`/r/${subreddit.value}`)
    })
  })
})
