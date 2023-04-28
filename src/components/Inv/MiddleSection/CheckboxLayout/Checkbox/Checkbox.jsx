import React, { useEffect, useState } from "react"
import { shallow } from "zustand/shallow"
import { useFilters, useItems } from "../../../../../store"
import style from "./Checkbox.module.scss"

const Checkbox = ({ params, game }) => {
  const { rarity, color } = params
  const [checked, setChecked] = useState(false)
  const { csgoFilterHandler, csgoFilters, dotaFilters, dotaFilterHandler } =
    useFilters(
      (state) => ({
        csgoFilterHandler: state.csgoFilterHandler,
        dotaFilterHandler: state.dotaFilterHandler,
        csgoFilters: state.csgoFilters,
        dotaFilters: state.dotaFilters,
      }),
      shallow
    )
  const currentGame = useItems((state) => state.currentGame, shallow)

  const isInFilters = () =>
    csgoFilters.includes(rarity) || dotaFilters.includes(rarity)
  return (
    <label className={style.chekboxLabel}>
      <input
        type='checkbox'
        name={rarity}
        className={style.checkbox}
        onChange={(ev) => {
          setChecked(!checked)
          if (currentGame === "CSGO") csgoFilterHandler(ev)
          else dotaFilterHandler(ev)
        }}
        checked={checked}
        data-game={game}
      />
      <div
        className={style.fakeCheckbox}
        style={{
          border: "1px solid " + color,
          backgroundColor: isInFilters() ? color : "transparent",
        }}
      ></div>
    </label>
  )
}

export default Checkbox
