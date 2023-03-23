import React from "react"
import style from "./LoginModalForm.module.scss"
import InputUI from "../../../../UIkit/InputUI/InputUI"

const LoginModalForm = () => {
  return (
    <form className={style.form}>
      <InputUI type='text' placeholder='Ваш логин' />
      <InputUI type='password' placeholder='Пароль' />
      <button className={style.btn}>Войти</button>
    </form>
  )
}

export default LoginModalForm
