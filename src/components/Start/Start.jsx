import React from "react"
import { Link } from "react-router-dom"
import style from "./Start.module.scss"

const Start = () => {
  return (
    <div className={style.wrapper + " container"}>
      <div className={style.contentWrapper}>
        <h1 className={style.bigSign}>
          Принимайте платежи от пользователей с помощью скинов CS:GO и DOTA 2
        </h1>
        <Link to='/reg' className={style.btn}>
          Присоединиться
        </Link>
      </div>
    </div>
  )
}

export default Start
