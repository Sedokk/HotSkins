import { Player } from "@lottiefiles/react-lottie-player"
import React from "react"
import { getCSGOColor, getDOTAColor } from "../../../../modules"
import { useCart, useItems } from "../../../../store"
import style from "./WeaponItem.module.scss"

const WeaponItem = ({ data }) => {
  const { price, img, rarity, hot, id, game } = data
  const currentGame = useItems((state) => state.currentGame)
  const { cart, addToCart, removeFromCart } = useCart((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
    removeFromCart: state.removeFromCart,
  }))
  const isInCart = () => {
    return cart.some((e) => e.id === id && e.game === game)
  }
  return (
    <div
      className={`${style.item} ${isInCart() ? style.active : ""}`}
      onClick={() => (isInCart() ? removeFromCart(data) : addToCart(data))}
    >
      <img src={img} alt='Weapon' className={style.img} />
      <span
        className={style.price}
        style={{ color: hot ? "#F47523" : "white" }}
      >
        {price} ₽
      </span>
      <div
        className={style.light}
        style={{
          background:
            currentGame === "CSGO"
              ? getCSGOColor(rarity)
              : getDOTAColor(rarity),
        }}
      ></div>
      {hot && (
        <div className={style.hot}>
          <Player
            loop
            autoplay
            src='https://assets9.lottiefiles.com/packages/lf20_7iux5gpv.json'
            style={{
              width: "30px",
              height: "30px",
            }}
          />
        </div>
      )}
    </div>
  )
}

export default WeaponItem
