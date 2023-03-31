import React from "react"
import { useAuth } from "../../../store"
import ModalContainer from "../../../UIkit/ModalContainer/ModalContainer"
import LoginModalContent from "../LoginModalContent/LoginModalContent"
import style from "./HeaderLocked.module.scss"

const HeaderLocked = () => {
  const { loginModalOpened, setLoginModalOpened } = useAuth((state) => ({
    loginModalOpened: state.loginModalOpened,
    setLoginModalOpened: state.setLoginModalOpened,
  }))
  return (
    <>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItem}>Помощь</li>
          <li className={style.navItem}>Контакты</li>
        </ul>
      </nav>
      <button
        className={style.loginBtn}
        onClick={() => setLoginModalOpened(true)}
      >
        Войти
      </button>
      {loginModalOpened && (
        <ModalContainer setOpened={setLoginModalOpened}>
          <LoginModalContent />
        </ModalContainer>
      )}
    </>
  )
}

export default HeaderLocked
