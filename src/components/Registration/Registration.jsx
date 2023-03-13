import React from "react"
import PasswordInput from "./PasswordInput/PasswordInput"
import style from "./Registration.module.scss"

const Registration = () => {
  return (
    <div className={style.wrapper + " container"}>
      <img src='./img/connectionLogo.png' alt='logo' className={style.img} />
      <form className={style.form}>
        <h2 className={style.title}>Регистрация</h2>
        <label className={style.label}>
          <input type='text' className={style.input} placeholder='Ваше имя' />
        </label>
        <label className={style.label}>
          <input type='text' className={style.input} placeholder='Ваш email' />
        </label>
        <PasswordInput />
        <PasswordInput />
        <button className={style.formBtn}>Зарегестрироваться</button>
      </form>
    </div>
  )
}

export default Registration
