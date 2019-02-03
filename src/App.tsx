import { createHistory, Link, LocationProvider, Redirect, RouteComponentProps, Router } from "@reach/router"
import { createHashSource } from "reach-router-hash-history"
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

const history = createHistory(createHashSource())

export const App = () => (
  <LocationProvider history={history}>
    <Router>
      <Redirect noThrow={true} from="/" to="r/itookapicture" />
      <GalleryContainer path="r/:subreddit" />
      <NotFound default={true} />
    </Router>
  </LocationProvider>
)
