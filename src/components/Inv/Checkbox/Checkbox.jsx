import React, { useEffect, useRef, useState } from "react"
import { useFilters } from "../../../store"
import style from "./Checkbox.module.scss"

const Checkbox = ({ params, game }) => {
  const { rarity, color } = params
  const [checked, setChecked] = useState(false)
  const { filterHandler, csgoFilters, dotaFilters } = useFilters((state) => ({
    filterHandler: state.filterHandler,
    csgoFilters: state.csgoFilters,
    dotaFilters: state.dotaFilters,
  }))

  const isInFilters = () =>
    csgoFilters.rarity.includes(rarity) || dotaFilters.rarity.includes(rarity)

  useEffect(() => {
    setChecked(isInFilters())
  }, [])
  return (
    <label className={style.chekboxLabel}>
      <input
        type='checkbox'
        name={rarity}
        className={style.checkbox}
        onChange={(ev) => {
          setChecked(!checked)
          filterHandler(ev)
        }}
        checked={checked}
        data-game={game}
      />
      <div
        className={style.fakeCheckbox}
        style={{
          border: "1px solid " + color,
          backgroundColor: checked ? color : "transparent",
        }}
      ></div>
    </label>
  )
}

export default Checkbox
