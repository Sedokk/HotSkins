import React from "react"
import style from "./CartItem.module.scss"
import { getCSGOColor, getDOTAColor } from "../../../../../modules"
import { useCart } from "../../../../../store"
import { Player } from "@lottiefiles/react-lottie-player"
import { shallow } from "zustand/shallow"

const CartItem = ({ data }) => {
  const { img, price, rarity, game, selected, id, hot } = data
  const setSelected = useCart((state) => state.setSelected, shallow)
  return (
    <div
      className={`${style.item} ${selected ? style.active : ""}`}
      onClick={() => setSelected(!selected, id)}
    >
      <img src={img} alt='Cart item' className={style.img} />
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
            game === "CSGO" ? getCSGOColor(rarity) : getDOTAColor(rarity),
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
              fill: "#F47523",
            }}
          />
        </div>
      )}
    </div>
  )
}

export default CartItem
