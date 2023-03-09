import React from "react"
import style from "./Inv.module.scss"
import TopSection from "./TopSection/TopSection"
import MiddleSection from "./MiddleSection/MiddleSection"
import BottomSection from "./BottomSection/BottomSection"
import { useCart } from "../../store"
import Cart from "./Cart/Cart"

const Inv = () => {
  const cartIsOpened = useCart((state) => state.cartIsOpened)
  return (
    <div className={style.wrapper}>
      <TopSection />
      <MiddleSection />
      {cartIsOpened ? <Cart /> : <BottomSection />}
    </div>
  )
}

export default Inv
