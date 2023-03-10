import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./components/App/App"
import Inv from "./components/Inv/Inv"
import Registration from "./components/Registration/Registration"
import Start from "./components/Start/Start"
import "./index.scss"
import Protected from "./Protected"

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
        element: (
          <Protected>
            <Inv />
          </Protected>
        ),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
