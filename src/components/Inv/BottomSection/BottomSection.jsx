import React, { memo, useEffect } from "react"
import { useItems } from "../../../store"
import AddAllBtn from "./addAllBtn/addAllBtn"
import style from "./BottomSection.module.scss"
import WeaponLayout from "./WeaponLayout/WeaponLayout"

const BottomSection = () => {
  return (
    <section className={style.bottomSection + " container"}>
      <div className={style.filterWrapper}>
        <AddAllBtn />
        <span className={style.filter}>По цене</span>
      </div>
      <div className={style.weaponWrapper}>
        <WeaponLayout />
      </div>
    </section>
  )
}

export default BottomSection
