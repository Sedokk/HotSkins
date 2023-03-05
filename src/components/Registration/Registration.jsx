import React from "react"
import style from "./Registration.module.scss"

const Registration = () => {
  return (
    <div className={style.wrapper + " container"}>
      <img src='./img/connectionLogo.png' alt='logo' className={style.img} />
      <form className={style.form}>
        <h2 className={style.title}>Заявка на подключение</h2>
        <label className={style.label}>
          <input type='text' className={style.input} placeholder='Ваше имя' />
        </label>
        <label className={style.label}>
          <input type='text' className={style.input} placeholder='Ваш email' />
        </label>
        <label className={style.label}>
          <input
            type='text'
            className={style.input}
            placeholder='Адрес сайта'
          />
        </label>
        <label className={style.label}>
          <textarea
            type='text'
            className={`${style.input} ${style.textArea}`}
            placeholder='Ваши контакты (Телефон, Telegram, WhatsApp...)'
            rows={4}
          />
        </label>
        <button className={style.formBtn}>Зарегестрироваться</button>
      </form>
    </div>
  )
}

export default Registration
