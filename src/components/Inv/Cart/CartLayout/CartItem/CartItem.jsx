import React from "react"
import style from "./CartItem.module.scss"
import { getCSGOColor, getDOTAColor } from "../../../../../modules"

const CartItem = ({ data }) => {
  const { img, price, rarity, game } = data
  return (
    <div className={`${style.item}`}>
      <img src={img} alt='Cart item' className={style.img} />
      <span className={style.price}>{price} ₽</span>
      <div
        className={style.light}
        style={{
          background:
            game === "CSGO" ? getCSGOColor(rarity) : getDOTAColor(rarity),
        }}
      ></div>
    </div>
  )
}

export default CartItem
