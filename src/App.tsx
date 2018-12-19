import { Link, Router } from "@reach/router"
import * as React from "react"

import Gallery from "./components/Gallery"

const App = () => (
  <>
    <nav>
      <Link to="r/pic">General</Link>
      <Link to="r/earthporn">Earth</Link>
      <Link to="r/waterporn">Water</Link>
      <Link to="r/cityporn">City</Link>
    </nav>

    <Router>
      <Gallery path="r/:subreddit" />
    </Router>
  </>
)

export default App
