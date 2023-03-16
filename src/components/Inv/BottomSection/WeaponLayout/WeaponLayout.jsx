import React, { useEffect } from "react"
import { useFilters, useItems } from "../../../../store"
import WeaponItem from "../WeaponItem/WeaponItem"
import { arrayFilter } from "../../../../modules"

const WeaponLayout = () => {
  const { textFilter, onlyHotPrices, dotaFilters, csgoFilters } = useFilters(
    (state) => ({
      textFilter: state.textFilter,
      onlyHotPrices: state.onlyHotPrices,
      dotaFilters: state.dotaFilters,
      csgoFilters: state.csgoFilters,
    })
  )
  const { data, currentGame } = useItems((state) => ({
    data: state.data,
    currentGame: state.currentGame,
  }))
  const filters = currentGame === "CSGO" ? csgoFilters : dotaFilters
  return (
    <>
      {data &&
        data
          .filter((e) =>
            arrayFilter(e, filters, textFilter, onlyHotPrices, currentGame)
          )
          .map((e) => <WeaponItem key={e.id} data={e} />)}
    </>
  )
}

export default WeaponLayout
