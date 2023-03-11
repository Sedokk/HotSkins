import React from "react"
import { useFilters, useItems } from "../../../../store"
import { arrayFilter } from "../../../../modules"
import WeaponItem from "../WeaponItem/WeaponItem"

const WeaponLayout = () => {
  const { csgoFilters, dotaFilters, textFilter, onlyHotPrices } = useFilters(
    (state) => ({
      csgoFilters: state.csgoFilters,
      dotaFilters: state.dotaFilters,
      textFilter: state.textFilter,
      onlyHotPrices: state.onlyHotPrices,
    })
  )
  const { csData, dotaData, currentGame } = useItems((state) => ({
    csData: state.csData,
    dotaData: state.dotaData,
    currentGame: state.currentGame,
  }))
  return (
    <>
      {currentGame === "CSGO"
        ? csData &&
          csData
            .filter((e) =>
              arrayFilter(e, csgoFilters, textFilter, onlyHotPrices)
            )
            .map((e) => <WeaponItem key={e.id} data={e} />)
        : dotaData &&
          dotaData
            .filter((e) =>
              arrayFilter(e, dotaFilters, textFilter, onlyHotPrices)
            )
            .map((e) => <WeaponItem key={e.id} data={e} />)}
    </>
  )
}

export default WeaponLayout
