import React from "react"
import { navigate } from "gatsby"
import Header from "../components/header"

export default function Other() {
  return (
    <div>
      <Header title="Gatsby Project" />
      <h1>Other Page</h1>
      <button onClick={() => navigate("/")}>To Home Page</button>
    </div>
  )
}
