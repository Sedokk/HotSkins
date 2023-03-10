import React, { useState } from "react"
import { Link } from "react-router-dom"
import style from "./Header.module.scss"
import LoginModal from "./LoginModal/LoginModal"

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false)
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
        </ul>
      </nav>
      <button className={style.loginBtn} onClick={() => setModalOpen(true)}>
        Войти
      </button>
      {modalOpen && <LoginModal setModalOpen={setModalOpen} />}
    </header>
  )
}

export default Header
