import { Link } from "@reach/router"
import classNames from "classnames"
import * as React from "react"

interface Props {
  readonly to: string
  readonly children: React.ReactChild
}
interface Option {
  readonly value: string
  readonly label: string
}

export const SUBREDDITS: ReadonlyArray<Option> = [
  { value: "itookapicture", label: "Photography" },
  { value: "pic", label: "General" },
  // { value: "aww", label: "Aww" },
  { value: "foodporn", label: "Food" },
  { value: "DessertPorn", label: "Dessert" },
  { value: "cityporn", label: "City" },
  { value: "JapanPics", label: "Japan" },
  { value: "EarthPorn", label: "Earth" },
  { value: "lakeporn", label: "Lakes" },
  { value: "RoomPorn", label: "Room" },
  { value: "AbandonedPorn", label: "Abandoned" },
  { value: "waterporn", label: "Water" },
  { value: "WinterPorn", label: "Winter" },
  { value: "ImaginaryLeviathans", label: "Art" }
]

const NavLink = (props: Props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: classNames({
          active: isCurrent
        })
      }
    }}
  />
)

const Navigation = () => {
  return (
    <nav className="nav-subreddit">
      <ul>
        {SUBREDDITS.map((option) => (
          <li key={option.value}>
            <NavLink data-testid={option.value} to={`/r/${option.value}`}>
              {option.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default React.memo(Navigation)
