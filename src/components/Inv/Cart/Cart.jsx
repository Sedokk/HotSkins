import React, { useState } from "react"
import { useCart } from "../../../store"
import ModalContainer from "../../../UIkit/ModalContainer/ModalContainer"
import style from "./Cart.module.scss"
import CartLayout from "./CartLayout/CartLayout"
import CartModalContent from "./CartModalContent/CartModalContent"
import DeleteBtn from "./DeleteBtn/DeleteBtn"
import Results from "./Results/Results"

const Cart = () => {
  const { cart, deleteModalIsOpen, setDeleteModalIsOpen } = useCart(
    (state) => ({
      cart: state.cart,
      deleteModalIsOpen: state.deleteModalIsOpen,
      setDeleteModalIsOpen: state.setDeleteModalIsOpen,
    })
  )
  return (
    <section className={`container ${style.cart}`}>
      {deleteModalIsOpen && (
        <ModalContainer setOpened={setDeleteModalIsOpen}>
          <CartModalContent />
        </ModalContainer>
      )}
      <div className={style.itemsContainer}>
        <div className={style.itemsContainerTop}>
          <h2 className={style.cartTitle}>Обмен преметов</h2>
          <DeleteBtn />
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
