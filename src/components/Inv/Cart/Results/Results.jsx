import React from "react"
import style from "./Results.module.scss"

const Results = () => {
  return (
    <div className={style.results}>
      <div className={style.sumBlock}>
        <h3 className={style.sumTitle}>Итого</h3>
        <span className={style.sum}>26549 ₽</span>
      </div>
      <div className={style.details}>
        <span className={style.gameDetails}>CS:GO</span>
        <span className={style.itemsDetails}>5 предметов</span>
        <span className={style.gameDetails}>DOTA 2</span>
        <span className={style.itemsDetails}>0 предметов</span>
      </div>
      <button className={style.exchangeBtn}>Обменять</button>
    </div>
  )
}

export default Results
