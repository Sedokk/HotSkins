import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./components/App/App"
import Start from "./components/Start/Start"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Start />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
