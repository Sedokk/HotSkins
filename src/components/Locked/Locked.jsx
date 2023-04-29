import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import HeaderLocked from "../Header/HeaderLocked/HeaderLocked"
import style from "./Locked.module.scss"
function Locked() {
  return (
    <div className={style.app}>
      <HeaderLocked />
      <div className={style.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Locked
