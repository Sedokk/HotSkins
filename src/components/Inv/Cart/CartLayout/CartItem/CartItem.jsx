import React from "react"
import style from "./CartItem.module.scss"
import { getCSGOColor, getDOTAColor } from "../../../../../modules"
import { useCart } from "../../../../../store"

const CartItem = ({ data }) => {
  const { img, price, rarity, game, selected, id } = data
  const setSelected = useCart((state) => state.setSelected)
  return (
    <div
      className={`${style.item} ${selected ? style.active : ""}`}
      onClick={() => setSelected(!selected, id)}
    >
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
