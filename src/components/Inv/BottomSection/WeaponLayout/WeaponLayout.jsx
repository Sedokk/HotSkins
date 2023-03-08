import React from "react"
import { useFilters, useItems } from "../../../../store"
import { arrayFilter } from "../../../../modules"
import WeaponItem from "../WeaponItem/WeaponItem"

const WeaponLayout = () => {
  const { csgoFilters, dotaFilters, textFilter } = useFilters((state) => ({
    csgoFilters: state.csgoFilters,
    dotaFilters: state.dotaFilters,
    textFilter: state.textFilter,
  }))
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
            .filter((e) => arrayFilter(e, csgoFilters, textFilter))
            .map((e) => <WeaponItem key={e.id} data={e} />)
        : dotaData &&
          dotaData
            .filter((e) => arrayFilter(e, dotaFilters, textFilter))
            .map((e) => <WeaponItem key={e.id} data={e} />)}
    </>
  )
}

export default WeaponLayout
