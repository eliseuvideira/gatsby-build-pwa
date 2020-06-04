import React from "react"
import styles from "./header.module.css"

export default function Header({ title }) {
  return (
    <header>
      <h1 className={styles.gray}>{title}</h1>
    </header>
  )
}
