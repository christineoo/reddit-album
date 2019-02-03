import { Link, Redirect, RouteComponentProps, Router } from "@reach/router"
import * as React from "react"

import GalleryContainer from "./components/GalleryContainer"
import "./styles.scss"

type Props = RouteComponentProps
export const NotFound = ({  }: Props) => (
  <div className="centered-container">
    <h1>The page you're looking for doesn't seem to exist</h1>
    <Link to={"/r/itookapicture"}>Back to Photography</Link>
  </div>
)

export const App = () => (
  <Router>
    <Redirect noThrow={true} from="/" to="r/itookapicture" />
    <GalleryContainer path="r/:subreddit" />
    <NotFound default={true} />
  </Router>
)
