import React from "react"
import PasswordInput from "../../Registration/PasswordInput/PasswordInput"
import style from "./LoginModal.module.scss"
const LoginModal = ({ setModalOpen }) => {
  return (
    <div className={style.outlay}>
      <div className={style.modal}>
        <button
          className={style.close}
          onClick={() => setModalOpen(false)}
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
        <form className={style.form}>
          <label className={style.label}>
            <input
              type='text'
              className={style.input}
              placeholder='Ваш логин'
            />
          </label>
          <PasswordInput />
          <button className={style.formBtn}>Войти</button>
        </form>
      </div>
    </div>
  )
}

export default LoginModal
