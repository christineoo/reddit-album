import { createHistory, Link, LocationProvider, Redirect, RouteComponentProps, Router } from "@reach/router"
import { createHashSource } from "reach-router-hash-history"
import * as React from "react"
import ErrorBoundary, { FallbackProps } from "react-error-boundary"

import GalleryContainer from "./components/GalleryContainer"
import "./styles.scss"

type Props = RouteComponentProps

const HomeLink = () => <Link to={"/r/itookapicture"}>Back to Photography</Link>
export const NotFound = (_: Props) => (
  <div className="centered-container">
    <h1>The page you&apos;re looking for doesn&apos;t seem to exist 🦄</h1>
    <HomeLink />
  </div>
)

const ErrorBoundaryFallbackComponent = ({ componentStack, error }: FallbackProps) => (
  <div className="centered-container">
    <h1>Oops! An error occurred!</h1>
    <p>Here’s what we know…</p>
    <p>
      <strong>Error:</strong> {error && error.toString()}
    </p>
    <p>
      <strong>Stacktrace:</strong> {componentStack}
    </p>
    <HomeLink />
  </div>
)

const history = createHistory(createHashSource())

export const App = () => (
  <ErrorBoundary FallbackComponent={ErrorBoundaryFallbackComponent}>
    <LocationProvider history={history}>
      <Router>
        <Redirect noThrow={true} from="/" to="r/itookapicture" />
        <GalleryContainer path="r/:subreddit" />
        <NotFound default={true} />
      </Router>
    </LocationProvider>
  </ErrorBoundary>
)
