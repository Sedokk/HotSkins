import React, { useState } from "react"
import { Link } from "react-router-dom"
import ModalContainer from "../../UIkit/ModalContainer/ModalContainer"
import style from "./Header.module.scss"
import LoginModalContent from "./LoginModalContent/LoginModalContent"

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
      {modalOpen && (
        <ModalContainer setOpened={setModalOpen}>
          <LoginModalContent setModalOpen={setModalOpen} />
        </ModalContainer>
      )}
    </header>
  )
}

export default Header
