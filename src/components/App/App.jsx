import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import HeaderUnlocked from "../Header/HeaderUnlocked/HeaderUnlocked"
import style from "./App.module.scss"
import { Suspense } from "react"
import Loading from "../../UIkit/Loading/Loading"
function App() {
  return (
    <div className={style.app}>
      <HeaderUnlocked />
      <div className={style.content}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default App
