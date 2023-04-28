import React from "react"
import { shallow } from "zustand/shallow"
import { declination } from "../../../../modules"
import { useCart } from "../../../../store"
import style from "./Results.module.scss"

const Results = () => {
  const cart = useCart((state) => state.cart, shallow)
  const { sum, DOTA, CSGO } = cart.reduce(
    (acc, el) => {
      return {
        CSGO: el.game === "CSGO" ? acc.CSGO + 1 : acc.CSGO,
        DOTA: el.game === "DOTA" ? acc.DOTA + 1 : acc.DOTA,
        sum: acc.sum + el.price,
      }
    },
    {
      CSGO: 0,
      DOTA: 0,
      sum: 0,
    }
  )
  console.log("results")
  return (
    <div className={style.results}>
      <div className={style.sumBlock}>
        <h3 className={style.sumTitle}>Итого</h3>
        <span className={style.sum}>{sum} ₽</span>
      </div>
      <div className={style.details}>
        <span className={style.gameDetails}>CS:GO</span>
        <span className={style.itemsDetails}>{declination(CSGO)}</span>
        <span className={style.gameDetails}>DOTA 2</span>
        <span className={style.itemsDetails}>{declination(DOTA)}</span>
      </div>
      <button className={style.exchangeBtn}>Обменять</button>
    </div>
  )
}

export default Results
