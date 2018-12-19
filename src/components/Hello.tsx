import * as React from "react"

import "./Hello.scss"

interface Props {
  readonly compiler: string
  readonly framework: string
}

export const Hello = ({ compiler, framework }: Props) => {
  return (
    <h1>
      Hello from {compiler} and {framework}
    </h1>
  )
}
