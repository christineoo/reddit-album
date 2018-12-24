import { Link } from "@reach/router"
import * as React from "react"

interface Props {
  readonly to: string
  readonly children: React.ReactChild
}

const NavLink = (props: Props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent && "red"
        }
      }
    }}
  />
)

const Navigation = () => {
  const navigationOptions: ReadonlyArray<any> = [
    { value: "pic", label: "General" },
    { value: "earthporn", label: "Earth" },
    { value: "waterporn", label: "Water" },
    { value: "cityporn", label: "City" },
    { value: "foodporn", label: "Food" },
    { value: "aww", label: "Aww" },
    { value: "lakeporn", label: "Lakes" }
  ]
  return (
    <nav>
      <ul>
        {navigationOptions.map((option) => (
          <li key={option.value}>
            <NavLink to={`/r/${option.value}`}>{option.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
