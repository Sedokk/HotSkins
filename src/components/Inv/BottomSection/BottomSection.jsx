import React, { useEffect } from "react"
import { arrayFilter } from "../../../modules"
import { useFilters, useItems } from "../../../store"
import WeaponItem from "../WeaponItem/WeaponItem"
import style from "./BottomSection.module.scss"

const BottomSection = () => {
  const [csData, dotaData, getCSGOData, getDOTAData, currentGame] = useItems(
    (state) => [
      state.csData,
      state.dotaData,
      state.getCSGOData,
      state.getDOTAData,
      state.currentGame,
    ]
  )
  const { csgoFilters, dotaFilters } = useFilters((state) => ({
    csgoFilters: state.csgoFilters,
    dotaFilters: state.dotaFilters,
  }))
  useEffect(() => {
    getCSGOData("http://localhost:3001/CSGO")
    getDOTAData("http://localhost:3001/DOTA")
  }, [])
  return (
    <section className={style.bottomSection + " container"}>
      <div className={style.filterWrapper}>
        <button className={style.chooseAll}>Выбрать все</button>
        <span className={style.filter}>По цене</span>
      </div>
      <div className={style.weaponWrapper}>
        {currentGame === "CSGO"
          ? csData &&
            csData
              .filter((e) => arrayFilter(e, csgoFilters))
              .map((e) => <WeaponItem key={e.id} data={e} />)
          : dotaData &&
            dotaData
              .filter((e) => arrayFilter(e, dotaFilters))
              .map((e) => <WeaponItem key={e.id} data={e} />)}
      </div>
    </section>
  )
}

export default BottomSection
