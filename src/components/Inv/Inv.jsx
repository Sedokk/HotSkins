import React from "react"
import style from "./Inv.module.scss"
import TopSection from "./TopSection/TopSection"
import MiddleSection from "./MiddleSection/MiddleSection"
import BottomSection from "./BottomSection/BottomSection"

const Inv = () => {
  return (
    <div className={style.wrapper}>
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  )
}

export default Inv
