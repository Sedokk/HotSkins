import React from "react"
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
    </>
  )
}

export default HeaderUnlocked
