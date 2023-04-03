import React from "react"
import HeaderMenu from "./HeaderMenu/HeaderMenu"
import style from "./HeaderUnlocked.module.scss"
const HeaderUnlocked = () => {
  return (
    <>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItem}>Помощь</li>
          <li className={style.navItem}>Контакты</li>
          <li className={style.navItem}>История</li>
        </ul>
      </nav>
      <HeaderMenu />
    </>
  )
}

export default HeaderUnlocked
