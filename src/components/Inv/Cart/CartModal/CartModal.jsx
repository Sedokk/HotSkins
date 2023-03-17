import React from "react"
import { useCart } from "../../../../store"
import style from "./CartModal.module.scss"

const CartModal = () => {
  const { setDeleteModalIsOpen } = useCart((state) => ({
    setDeleteModalIsOpen: state.setDeleteModalIsOpen,
  }))
  return (
    <div className={style.outlay}>
      <div className={style.modal}>
        <h3 className={style.title}>
          Вы уверены, что хотите удалить все предметы?
        </h3>
        <div className={style.btnWrapper}>
          <button className={style.modalBtn}>Удалить</button>
          <button
            className={`${style.modalBtn} ${style.cancelBtn}`}
            onClick={() => setDeleteModalIsOpen(false)}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartModal
