import React, { useLayoutEffect } from "react"
import { shallow } from "zustand/shallow"
import { useCart } from "../../../../store"
import style from "./CartModalContent.module.scss"

const CartModalContent = () => {
  const { setDeleteModalIsOpen, cart, onClearCart } = useCart(
    (state) => ({
      setDeleteModalIsOpen: state.setDeleteModalIsOpen,
      cart: state.cart,
      onClearCart: state.onClearCart,
    }),
    shallow
  )
  useLayoutEffect(() => {
    document.body.style.overflowY = "hidden"

    return () => {
      document.body.style.overflowY = "auto"
    }
  }, [])
  const selectedItems = cart.filter((e) => e.selected)
  return (
    <div className={style.modal}>
      <h3 className={style.title}>
        {selectedItems.length > 0
          ? "Вы уверены, что хотите удалить выбранные предметы?"
          : "Вы уверены, что хотите удалить все предметы?"}
      </h3>
      <div className={style.btnWrapper}>
        <button
          className={style.modalBtn}
          onClick={() => {
            onClearCart(selectedItems)
            setDeleteModalIsOpen(false)
          }}
        >
          Удалить
        </button>
        <button
          className={`${style.modalBtn} ${style.cancelBtn}`}
          onClick={() => setDeleteModalIsOpen(false)}
        >
          Закрыть
        </button>
      </div>
    </div>
  )
}

export default CartModalContent
