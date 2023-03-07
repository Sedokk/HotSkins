import React from "react"
import style from "./MiddleSection.module.scss"
import Checkbox from "../Checkbox/Checkbox"
import { useItems } from "../../../store"

const MiddleSection = () => {
  const currentGame = useItems((state) => state.currentGame)
  const csgoItems = [
    {
      rarity: "extraordinary",
      color: "#FFCE50",
    },
    {
      rarity: "covert",
      color: "#ED422B",
    },
    {
      rarity: "classified",
      color: "#CF309C",
    },
    {
      rarity: "restricted",
      color: "#8533ED",
    },
    {
      rarity: "mil-spec",
      color: "#275CE4",
    },
    {
      rarity: "industrial",
      color: "#6AB2F4",
    },
    {
      rarity: "consumer",
      color: "#B4C2D7",
    },
  ]
  const dotaItems = [
    {
      rarity: "arcana",
      color: "#4ADD32",
    },
    {
      rarity: "immortal",
      color: "#FFCE50",
    },
    {
      rarity: "legendary",
      color: "#CF309C",
    },
    {
      rarity: "mythical",
      color: "#8533ED",
    },
    {
      rarity: "rare",
      color: "#275CE4",
    },
    {
      rarity: "uncommon",
      color: "#6AB2F4",
    },
    {
      rarity: "common",
      color: "#B4C2D7",
    },
  ]
  return (
    <section className={style.middleSection + " container"}>
      <div className={style.top}>
        <h3 className={style.title}>Выбор предметов для обмена</h3>
        <label className={style.label}>
          <img src='./img/icons/Union.svg' alt='union' />
          <input
            type='text'
            className={style.input}
            placeholder='Поиск по назаванию'
          />
        </label>
      </div>
      <div className={style.bottom}>
        <div className={style.checkboxesWrapper}>
          <span className={style.checkSign}>Редкость</span>
          {currentGame === "CSGO"
            ? csgoItems.map((item) => (
                <Checkbox game='CSGO' params={item} key={item.rarity} />
              ))
            : dotaItems.map((item) => (
                <Checkbox game='DOTA' params={item} key={item.rarity} />
              ))}
        </div>
        <span className={style.hotPrices}>Только горячие цены</span>
      </div>
    </section>
  )
}

export default MiddleSection
