import React, { useState } from "react"
import { useCart } from "../../../store"
import style from "./Cart.module.scss"
import CartLayout from "./CartLayout/CartLayout"
import CartModal from "./CartModal/CartModal"
import Results from "./Results/Results"

const Cart = () => {
  const { cart, deleteModalIsOpen, setDeleteModalIsOpen } = useCart(
    (state) => ({
      cart: state.cart,
      setDeleteModalIsOpen: state.setDeleteModalIsOpen,
      deleteModalIsOpen: state.deleteModalIsOpen,
    })
  )
  return (
    <section className={`container ${style.cart}`}>
      {deleteModalIsOpen && <CartModal />}
      <div className={style.itemsContainer}>
        <div className={style.itemsContainerTop}>
          <h2 className={style.cartTitle}>Обмен преметов</h2>
          <button
            className={style.deleteBtn}
            onClick={() => setDeleteModalIsOpen(true)}
          ></button>
        </div>
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
