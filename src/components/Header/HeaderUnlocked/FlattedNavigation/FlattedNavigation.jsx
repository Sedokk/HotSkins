import React from "react"
import style from "./FlattedNavigation.module.scss"
import HeaderMenu from "../HeaderMenu/HeaderMenu"

const FlattedNavigation = () => {
  return (
    <div className={style.navBlock}>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItem}>Помощь</li>
          <li className={style.navItem}>Контакты</li>
          <li className={style.navItem}>История</li>
        </ul>
      </nav>
      <HeaderMenu />
    </div>
  )
}

export default FlattedNavigation
