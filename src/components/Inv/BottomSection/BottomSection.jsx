import React, { useEffect } from "react"
import { useFilters, useItems } from "../../../store"
import style from "./BottomSection.module.scss"
import WeaponLayout from "./WeaponLayout/WeaponLayout"

const BottomSection = () => {
  const { getCSGOData, getDOTAData } = useItems((state) => ({
    getCSGOData: state.getCSGOData,
    getDOTAData: state.getDOTAData,
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
        <WeaponLayout />
      </div>
    </section>
  )
}

export default BottomSection
