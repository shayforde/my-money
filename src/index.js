import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { AuthContext } from "./context/AuthContext"

ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
      <App />
    </AuthContext>
  </React.StrictMode>,
  document.getElementById("root")
)
