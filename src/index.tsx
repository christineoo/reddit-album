import { Redirect, RouteComponentProps, Router } from "@reach/router"
import * as React from "react"
import * as ReactDOM from "react-dom"

import App from "./App"
import Gallery from "./components/Gallery"

type Props = RouteComponentProps

const NotFound = ({  }: Props) => <Redirect to="/r/pic" />

ReactDOM.render(
  <App>
    <Router>
      <Gallery path="r/:subreddit" />
      <NotFound default={true} />
    </Router>
  </App>,
  document.getElementById("root")
)
