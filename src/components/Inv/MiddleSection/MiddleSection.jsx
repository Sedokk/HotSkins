import React from "react"
import style from "./MiddleSection.module.scss"
import Checkbox from "../Checkbox/Checkbox"

const MiddleSection = () => {
  const csItems = [
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
      color: "#FFFFFF",
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
          {csItems.map((item) => (
            <Checkbox params={item} key={item.rarity} />
          ))}
        </div>
        <span className={style.hotPrices}>Только горячие цены</span>
      </div>
    </section>
  )
}

export default MiddleSection
