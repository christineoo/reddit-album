declare module "react-photo-gallery" {
  import * as React from "react"

  // declare class Gallery extends React.Component<GalleryProps> {
  //   constructor(props: GalleryProps)
  // }
  class Gallery extends React.Component<GalleryProps> {
    constructor(props: GalleryProps)
  }

  export interface PhotoProps {
    src: string
    width: number
    height: number
    alt?: string
    scrSet?: string | string[]
    sizes?: string
  }

  export interface GalleryProps {
    photos: PhotoProps[]
    direction?: "column" | "row"
    onClick?: () => void
    columns?: () => void | number
    margin?: number
    ImageComponent?: React.ComponentType
  }

  export interface ImageComponentProps {
    index: number
    onClick?: () => void
    photo: PhotoProps
    margin?: string
    top: number
    left: number
    direction?: "column" | "row"
  }

  export default Gallery
}
