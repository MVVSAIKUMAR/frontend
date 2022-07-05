import React, { useContext } from "react"
import { ContextTheme } from "./Context/ContextTheme"

export default function Footer() {
  const [darkMode] = useContext(ContextTheme)
  return (
    <footer className={`${darkMode ? `Dark2` : "Light"}`}>
      <hr />
      <h3>© 2022 MANDA VEERA VENKATA SAI KUMAR. All rights reserved.</h3>
    </footer>
  )
}