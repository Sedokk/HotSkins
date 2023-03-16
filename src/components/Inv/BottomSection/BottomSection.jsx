import React from "react"
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
      <WeaponLayout />
    </section>
  )
}

export default BottomSection
