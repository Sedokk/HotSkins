import React from "react"
import style from "./Cart.module.scss"
import CartLayout from "./CartLayout/CartLayout"
import Results from "./Results/Results"

const Cart = () => {
  return (
    <section className={`container ${style.cart}`}>
      <div className={style.itemsContainer}>
        <h2 className={style.cartTitle}>Обмен преметов</h2>
        <div className={style.itemsWrapper}>
          <CartLayout />
        </div>
      </div>
      <Results />
    </section>
  )
}

export default Cart
