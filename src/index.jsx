import React, { lazy } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./components/App/App"
// import Inv from "./components/Inv/Inv"
import Registration from "./components/Registration/Registration"
import Start from "./components/Start/Start"
import "./index.scss"
import Protected from "./Protected"
import Locked from "./components/Locked/Locked"

const Inv = lazy(() => import("./components/Inv/Inv"))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <App />
      </Protected>
    ),
    children: [
      {
        index: true,
        element: <Inv />,
      },
    ],
  },
  {
    path: "/start",
    element: <Locked />,
    children: [
      {
        index: true,
        element: <Start />,
      },
    ],
  },
  {
    path: "/reg",
    element: <Locked />,
    children: [
      {
        index: true,
        element: <Registration />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
