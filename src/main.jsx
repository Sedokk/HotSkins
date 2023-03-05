import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./components/App/App"
import Inv from "./components/Inv/Inv"
import Registration from "./components/Registration/Registration"
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
      {
        path: "/reg",
        element: <Registration />,
      },
      {
        path: "/inv",
        element: <Inv />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
