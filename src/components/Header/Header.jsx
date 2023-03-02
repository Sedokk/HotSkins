import React from "react"
import style from "./Header.module.scss"

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logoWrapper}>
        <img src='./img/logo/logo.svg' alt='logo' />
        <img src='./img/logo/logoText.svg' alt='label' />
      </div>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItem}>Помощь</li>
          <li className={style.navItem}>Контакты</li>
        </ul>
      </nav>
      <button className={style.loginBtn}>Войти</button>
    </header>
  )
}

export default Header
