import * as React from "react"

import "./styles.scss"

interface Props {
  readonly children: React.ReactChild
}
const App = ({ children }: Props) => <>{children}</>

export default App
