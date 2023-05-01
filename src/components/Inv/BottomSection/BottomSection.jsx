import React from "react"
import AddAllBtn from "./AddAllBtn/AddAllBtn"
import style from "./BottomSection.module.scss"
import SortSelector from "./SortSelector/SortSelector"
import WeaponLayout from "./WeaponLayout/WeaponLayout"

const BottomSection = () => {
  return (
    <section className={style.bottomSection + " container"}>
      <div className={style.filterWrapper}>
        <AddAllBtn />
        <SortSelector />
      </div>
      <WeaponLayout />
    </section>
  )
}

export default BottomSection
