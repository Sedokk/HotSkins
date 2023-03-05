import React from "react"
import style from "./BottomSection.module.scss"

const BottomSection = () => {
  return (
    <section className={style.bottomSection + " container"}>
      <div className={style.filterWrapper}>
        <button className={style.chooseAll}>Выбрать все</button>
        <span className={style.filter}>По цене</span>
      </div>
      <div className={style.weaponWrapper}></div>
    </section>
  )
}

export default BottomSection
