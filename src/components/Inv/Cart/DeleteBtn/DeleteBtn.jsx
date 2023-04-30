import React from "react"
import { shallow } from "zustand/shallow"
import { useCart } from "../../../../store"

const DeleteBtn = () => {
  const { setDeleteModalIsOpen, cart } = useCart(
    (state) => ({
      setDeleteModalIsOpen: state.setDeleteModalIsOpen,
      cart: state.cart,
    }),
    shallow
  )
  const btnHandler = () => {
    if (cart.length > 0) setDeleteModalIsOpen(true)
  }
  return (
    <button
      onClick={btnHandler}
      style={{
        width: "35px",
        height: "35px",
        background:
          'transparent url("./img/icons/delete.svg") no-repeat center',
      }}
    ></button>
  )
}

export default DeleteBtn
