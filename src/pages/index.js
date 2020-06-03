import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div>
      <Header title="Gatsby Project" />
      <Link to="other">Other Page</Link>
      <br />
      <a href="https://www.youtube.com">Go Away</a>
      <br />
      <img
        src="https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png"
        alt="gatsby logo"
        width="120px"
      />
    </div>
  )
}
