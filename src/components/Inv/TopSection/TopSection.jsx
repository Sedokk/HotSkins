import React from "react"
import style from "./TopSection.module.scss"

const TopSection = () => {
  return (
    <section className={"container " + style.topSection}>
      <div className={style.info}>
        <h2 className={style.operation}>Пополнение счёта</h2>
        <span className={style.accountInfo}>Steam | № 86968690484</span>
      </div>
      <div className={style.btnWrapper}>
        <button
          className={`${style.gameBtn} ${style.csBtn} ${style.activeBtn}`}
        >
          CS:GO
        </button>
        <button className={`${style.gameBtn} ${style.dotaBtn}`}>DOTA 2</button>
      </div>
      <button className={style.refreshBtn}>
        <img src='./img/icons/refresh-min.svg' alt='refresh' />
        Обновить инвентарь
      </button>
    </section>
  )
}

export default TopSection
