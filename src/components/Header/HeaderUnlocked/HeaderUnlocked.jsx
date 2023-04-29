import React from "react"
import HeaderMenu from "./HeaderMenu/HeaderMenu"
import style from "./HeaderUnlocked.module.scss"
import { Link } from "react-router-dom"
const HeaderUnlocked = () => {
  return (
    <header className={style.header + " container"}>
      <Link to='/'>
        <div className={style.logoWrapper}>
          <img src='./img/logo/logo.svg' alt='logo' />
          <img src='./img/logo/logoText.svg' alt='label' />
        </div>
      </Link>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItem}>Помощь</li>
          <li className={style.navItem}>Контакты</li>
          <li className={style.navItem}>История</li>
        </ul>
      </nav>
      <HeaderMenu />
    </header>
  )
}

export default HeaderUnlocked
