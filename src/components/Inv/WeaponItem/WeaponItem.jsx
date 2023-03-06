import React from "react"
import { getCSGOColor } from "../../../modules"
import style from "./WeaponItem.module.scss"

const WeaponItem = ({ data }) => {
  const { price, img, rarity, hot } = data
  return (
    <div className={style.item}>
      <img src={img} alt='Weapon' className={style.img} />
      <span className={style.price}>{price} ₽</span>
      <div
        className={style.light}
        style={{ background: getCSGOColor(rarity) }}
      ></div>
    </div>
  )
}

export default WeaponItem
