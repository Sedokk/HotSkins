import React from "react"
import { useFilters } from "../../../../store"
import style from "./HotPrices.module.scss"

const HotPrices = () => {
  const { onlyHotPrices, hotPricesHandler } = useFilters((state) => ({
    onlyHotPrices: state.onlyHotPrices,
    hotPricesHandler: state.hotPricesHandler,
  }))
  return (
    <label className={style.chekboxLabel}>
      <input
        type='checkbox'
        name='onlyHotPrices'
        className={style.checkbox}
        onChange={hotPricesHandler}
      />
      <div
        className={`${style.fakeCheckbox} ${
          onlyHotPrices ? style.checked : ""
        }`}
      ></div>
      <img src='./img/icons/fire.png' alt='fire pic' className={style.img} />
      <span className={style.title}>Только горячие цены</span>
    </label>
  )
}

export default HotPrices
