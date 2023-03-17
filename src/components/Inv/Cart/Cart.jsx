import React from "react"
import { useCart } from "../../../store"
import style from "./Cart.module.scss"
import CartLayout from "./CartLayout/CartLayout"
import Results from "./Results/Results"

const Cart = () => {
  const cart = useCart((state) => state.cart)
  return (
    <section className={`container ${style.cart}`}>
      <div className={style.itemsContainer}>
        <h2 className={style.cartTitle}>Обмен преметов</h2>
        {cart.length > 0 ? (
          <div className={style.itemsWrapper}>
            <CartLayout />
          </div>
        ) : (
          <div className={style.notFound}>
            <img
              src='./img/other/eye.png'
              alt='no items'
              style={{ width: "300px" }}
            />
            <p>Ваша корзина пуста</p>
          </div>
        )}
      </div>
      <Results />
    </section>
  )
}

export default Cart
