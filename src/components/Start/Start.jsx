import React from "react"
import style from "./Start.module.scss"

const Start = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.contentWrapper}>
        <h1 className={style.bigSign}>
          Принимайте платежи от пользователей с помощью скинов CS:GO и DOTA 2
        </h1>
        <button className={style.btn}>Присоединиться</button>
      </div>
    </div>
  )
}

export default Start
