import React from "react"
import InputUI from "../../UIkit/InputUI/InputUI"
import style from "./Registration.module.scss"

const Registration = () => {
  return (
    <div className={style.wrapper + " container"}>
      <img src='./img/connectionLogo.png' alt='logo' className={style.img} />
      <form className={style.form}>
        <h2 className={style.title}>Регистрация</h2>
        <InputUI type='text' placeholder='Ваше имя' width={450} />
        <InputUI type='text' placeholder='Ваше email' width={450} />
        <InputUI type='password' placeholder='Пароль' width={450} />
        <InputUI type='password' placeholder='Повторите пароль' width={450} />
        <button className={style.formBtn}>Зарегестрироваться</button>
      </form>
    </div>
  )
}

export default Registration
