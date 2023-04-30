import React from "react"
import { shallow } from "zustand/shallow"
import { useCart } from "../../../../store"
import CartItem from "./CartItem/CartItem"

const CartLayout = () => {
  const cart = useCart((state) => state.cart, shallow)
  return (
    <>
      {cart.map((e) => (
        <CartItem key={e.id} data={e} />
      ))}
    </>
  )
}

export default CartLayout
