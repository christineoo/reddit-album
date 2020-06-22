import * as React from "react"
import ReactLoading from "react-loading"

const LoadingBars = () => {
  return (
    <div className="loading-container">
      <ReactLoading type="bars" color="#b9c8d0" />
    </div>
  )
}

export default LoadingBars
