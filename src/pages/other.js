import React from "react"
import { navigate } from "gatsby"

export default function Other() {
  return (
    <div>
      <h1>Other Page</h1>
      <button onClick={() => navigate("/")}>To Home Page</button>
    </div>
  )
}
