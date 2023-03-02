import React from "react"
import { Link } from "react-router-dom"
import style from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <span className={style.copyright}>Copyright © Skincash.ru</span>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <Link className={style.navLink}>Помощь</Link>
          </li>
          <li className={style.navItem}>
            <Link className={style.navLink}>Контакты</Link>
          </li>
          <li className={style.navItem}>
            <Link className={style.navLink}>Пользовательское соглашение</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
