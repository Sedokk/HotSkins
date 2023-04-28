import React, { useEffect } from "react"
import style from "./Inv.module.scss"
import TopSection from "./TopSection/TopSection"
import MiddleSection from "./MiddleSection/MiddleSection"
import BottomSection from "./BottomSection/BottomSection"
import { useCart, useItems } from "../../store"
import Cart from "./Cart/Cart"

const Inv = () => {
  const cartIsOpened = useCart((state) => state.cartIsOpened)
  const [getData, setData] = useItems((state) => [state.getData, state.setData])
  useEffect(() => {
    const doData = async () => {
      const res = await Promise.all([
        getData("http://localhost:3001/CSGO", "CSGO"),
        getData("http://localhost:3001/DOTA", "DOTA"),
      ])
      setData(res.flat())
    }
    doData()
  }, [getData, setData])
  return (
    <div className={style.wrapper}>
      <TopSection />
      {cartIsOpened ? (
        <Cart />
      ) : (
        <>
          <MiddleSection /> <BottomSection />
        </>
      )}
    </div>
  )
}

export default Inv
