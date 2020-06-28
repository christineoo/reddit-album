import * as React from "react"
import { render, cleanup, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Image from "../Image"

afterEach(cleanup)

describe("Image Component", () => {
  test("renders the title", () => {
    const photo = {
      height: 10,
      width: 10,
      src: "https://image.png",
      title: "I am a title",
      url: "https://image.png"
    }
    render(<Image photo={photo} index={0} onClick={jest.fn()} />)

    expect(screen.getByText(photo.title)).toBeInTheDocument()
  })
})
