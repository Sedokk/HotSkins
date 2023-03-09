import React from "react"
import { getCSGOColor, getDOTAColor } from "../../../../modules"
import { useCart, useItems } from "../../../../store"
import style from "./WeaponItem.module.scss"

const WeaponItem = ({ data }) => {
  const { price, img, rarity, hot } = data
  const currentGame = useItems((state) => state.currentGame)
  const { cart, addToCart, removeFromCart } = useCart((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
    removeFromCart: state.removeFromCart,
  }))
  const isInCart = () => {
    return cart.includes(data)
  }
  return (
    <div
      className={`${style.item} ${isInCart() ? style.active : ""}`}
      onClick={() => (isInCart(data) ? removeFromCart(data) : addToCart(data))}
    >
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
