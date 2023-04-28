import React, { memo } from "react"
import { useFilters } from "../../../../store"
import style from "./HotPrices.module.scss"
import { Player } from "@lottiefiles/react-lottie-player"
import { shallow } from "zustand/shallow"

const HotPrices = () => {
  const { onlyHotPrices, hotPricesHandler } = useFilters(
    (state) => ({
      onlyHotPrices: state.onlyHotPrices,
      hotPricesHandler: state.hotPricesHandler,
    }),
    shallow
  )
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
      <Player
        loop
        autoplay
        src='https://assets9.lottiefiles.com/packages/lf20_7iux5gpv.json'
        style={{
          width: "30px",
          height: "30px",
          position: "relative",
          bottom: "4px",
        }}
      />
      <span className={style.title}>Только горячие цены</span>
    </label>
  )
}

export default memo(HotPrices)
