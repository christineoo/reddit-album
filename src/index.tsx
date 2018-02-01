import { Redirect, RouteComponentProps, Router } from "@reach/router"
import * as React from "react"
import * as ReactDOM from "react-dom"

import GalleryContainer from "./components/GalleryContainer"
import "./styles.scss"

type Props = RouteComponentProps

const NotFound = ({  }: Props) => <Redirect to="/r/pic" />

ReactDOM.render(
  <Router>
    <GalleryContainer path="r/:subreddit" />
    <NotFound default={true} />
  </Router>,
  document.getElementById("root")
)
