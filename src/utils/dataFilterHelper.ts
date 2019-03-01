import { pick } from "lodash-es"

import { ImageData } from "../components/GalleryContainer"

export const filteredData = (res: any) => {
  const dataWithImages = res.filter(
    (child: any) => child.data.url.match(/\.(jpeg|jpg|gif|png)$/) != null && !!child.data.preview
  )

  const imageData: ImageData = dataWithImages.map(
    (item: any): ImageData => {
      let dimension = { height: 0, width: 0 }
      const resolutionLength = item.data.preview.images[0].resolutions.length
      let urlOfLowerResolution = ""

      if (item.data.preview.images[0].resolutions.length > 4) {
        dimension = {
          height: item.data.preview.images[0].resolutions[3].height,
          width: item.data.preview.images[0].resolutions[3].width
        }
        urlOfLowerResolution = item.data.preview.images[0].resolutions[3].url
      } else {
        dimension = {
          height: item.data.preview.images[0].resolutions[resolutionLength - 1].height,
          width: item.data.preview.images[0].resolutions[resolutionLength - 1].width
        }
        urlOfLowerResolution = item.data.preview.images[0].resolutions[resolutionLength - 1].url
      }

      const regex = /amp;/g
      const validLowerResUrl = urlOfLowerResolution.replace(regex, "")

      return {
        ...pick(item.data, "name", "author", "title"),
        height: dimension.height,
        src: item.data.url,
        url: validLowerResUrl,
        width: dimension.width
      }
    }
  )

  return imageData
}
