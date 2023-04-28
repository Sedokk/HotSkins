import React from "react"
import { useCart, useItems } from "../../../store"
import { shallow } from "zustand/shallow"
import style from "./TopSection.module.scss"

const TopSection = () => {
  const { currentGame, setCurrentGame } = useItems(
    (state) => ({
      currentGame: state.currentGame,
      setCurrentGame: state.setCurrentGame,
    }),
    shallow
  )
  const { cartIsOpened, setCartIsOpened } = useCart(
    (state) => ({
      setCartIsOpened: state.setCartIsOpened,
      cartIsOpened: state.cartIsOpened,
    }),
    shallow
  )
  return (
    <section className={"container " + style.topSection}>
      <div className={style.info}>
        <h2 className={style.operation}>Пополнение счёта</h2>
        <span className={style.accountInfo}>Steam | № 86968690484</span>
      </div>
      <div className={style.btnWrapper}>
        <button
          className={`${style.gameBtn} ${style.csBtn} ${
            currentGame === "CSGO" ? style.activeBtn : ""
          }`}
          onClick={() => setCurrentGame("CSGO")}
        >
          CS:GO
        </button>
        <button
          className={`${style.gameBtn} ${style.dotaBtn} ${
            currentGame === "DOTA" ? style.activeBtn : ""
          }`}
          onClick={() => setCurrentGame("DOTA")}
        >
          DOTA 2
        </button>
      </div>
      <button
        className={style.refreshBtn}
        onClick={() => setCartIsOpened(!cartIsOpened)}
      >
        {cartIsOpened ? "Мои предметы" : "Обмен"}
        <img
          src={`./img/icons/${cartIsOpened ? "sword" : "money"}.svg`}
          alt='icon'
        />
      </button>
    </section>
  )
}

export default TopSection
