import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import style from "./App.module.scss"
function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
