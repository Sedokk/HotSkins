import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import HeaderUnlocked from "../Header/HeaderUnlocked/HeaderUnlocked"
import style from "./App.module.scss"
function App() {
  return (
    <div className={style.app}>
      <HeaderUnlocked />
      <div className={style.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
