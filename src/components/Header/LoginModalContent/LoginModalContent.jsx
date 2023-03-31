import React from "react"
import LoginModalForm from "./LoginModalForm/LoginModalForm"
import style from "./LoginModalContent.module.scss"
import { useAuth } from "../../../store"
const LoginModalContent = () => {
  const setLoginModalOpened = useAuth((state) => state.setLoginModalOpened)
  return (
    <div className={style.modal}>
      <button
        className={style.close}
        onClick={() => setLoginModalOpened(false)}
      ></button>
      <div className={style.images}>
        <img
          src='./img/logo/logo.svg'
          alt='logotype'
          style={{ width: "150px" }}
        />
        <img
          src='./img/logo/logoText.svg'
          alt='title'
          style={{ width: "160px" }}
        />
      </div>
      <LoginModalForm />
    </div>
  )
}

export default LoginModalContent
