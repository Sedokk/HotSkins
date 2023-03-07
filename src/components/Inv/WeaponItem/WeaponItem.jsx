import React from "react"
import { getCSGOColor, getDOTAColor } from "../../../modules"
import { useItems } from "../../../store"
import style from "./WeaponItem.module.scss"

const WeaponItem = ({ data }) => {
  const { price, img, rarity, hot } = data
  const currentGame = useItems((state) => state.currentGame)
  return (
    <div className={style.item}>
      <img src={img} alt='Weapon' className={style.img} />
      <span className={style.price}>{price} ₽</span>
      <div
        className={style.light}
        style={{
          background:
            currentGame === "CSGO"
              ? getCSGOColor(rarity)
              : getDOTAColor(rarity),
        }}
      ></div>
    </div>
  )
}

export default WeaponItem
